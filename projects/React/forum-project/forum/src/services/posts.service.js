import { ref, push, get, query, equalTo, orderByChild, update, onValue } from 'firebase/database';
import { db } from '../config/firebase-config';

export const fromPostsDocument = snapshot => {
  const postsDocument = snapshot.val();

  return Object.keys(postsDocument).map(key => {
    const post = postsDocument[key];

    return {
      ...post,
      id: key,
      createdOn: new Date(post.createdOn),
      likedBy: post.likedBy ? Object.keys(post.likedBy) : [],
      comments: post.comments ? post.comments : {},
    };
  });
};

export const addPost = (title, content, handle, tags) => {

  return push(
    ref(db, 'posts'),
    {
      title,
      content,
      author: handle,
      createdOn: Date.now(),
      tags
    },
  )
    .then(result => {

      return getPostById(result.key);
    });
};

export const getPostById = (id) => {

  return get(ref(db, `posts/${id}`))
    .then(result => {
      if (!result.exists()) {
        throw new Error(`Post with id ${id} does not exist!`);
      }

      const post = result.val();
      post.id = id;
      post.createdOn = new Date(post.createdOn);

      if (!post.likedBy) {
        post.likedBy = [];
      } else {
        post.likedBy = Object.keys(post.likedBy);
      }

      if (!post.comments) {
        post.comments = {};
      }

      return post;
    });
};

export const getLikedPosts = (username) => {

  return get(ref(db, `users/${username}`))
    .then(snapshot => {
      if (!snapshot.val()) {
        throw new Error(`User with username @${username} does not exist!`);
      }

      const user = snapshot.val();
      if (!user.likedPosts) return [];

      return Promise.all(Object.keys(user.likedPosts).map(key => {

        return get(ref(db, `posts/${key}`))
          .then(snapsh => {
            const post = snapsh.val();

            return {
              ...post,
              createdOn: new Date(post.createdOn),
              id: key,
              likedBy: post.likedBy ? Object.keys(post.likedBy) : [],
              comments: post.comments ? post.comments : {},
            };
          });
      }));
    });
};

export const getPostsByAuthor = (username) => {

  return get(query(ref(db, 'posts'), orderByChild('author'), equalTo(username)))
    .then(snapshot => {
      if (!snapshot.exists()) return [];

      return fromPostsDocument(snapshot);
    });
};

export const getAllPosts = () => {

  return get(ref(db, 'posts'))
    .then(snapshot => {
      if (!snapshot.exists()) {
        return [];
      }

      return fromPostsDocument(snapshot);
    });
};

export const editTags = (postId, newTag) => {
  const updateTag = {};
  updateTag[`posts/${postId}/tags`] = newTag.join(',');
  return update(ref(db), updateTag);
};

export const editPost = (postId, value) => {
  const updateContent = {};
  updateContent[`posts/${postId}/content`] = value;

  return update(ref(db), updateContent);
};

export const deletePost = async (postID) => {
  const post = await getPostById(postID);
  const updateLikes = {};

  post.likedBy.forEach(username => {
    updateLikes[`/users/${username}/likedPosts/${postID}`] = null;
  });

  await update(ref(db), updateLikes);

  return update(ref(db), {
    [`/posts/${postID}`]: null,
  });
};

export const likePost = (username, postID) => {
  const updateLikes = {};
  updateLikes[`/posts/${postID}/likedBy/${username}`] = true;
  updateLikes[`/users/${username}/likedPosts/${postID}`] = true;

  return update(ref(db), updateLikes);
};

export const dislikePost = (username, postID) => {
  const updateLikes = {};
  updateLikes[`/posts/${postID}/likedBy/${username}`] = null;
  updateLikes[`/users/${username}/likedPosts/${postID}`] = null;

  return update(ref(db), updateLikes);
};

export const getLivePostData = (id, listen) => {
  return onValue(ref(db, `/posts/${id}`), listen);
};

export const getLivePosts = (listen) => {
  return onValue(ref(db, 'posts'), listen);
};


export const addComment = (postId, comment, username) => {

  return push(ref(db, `posts/${postId}/comments`),
    {
      comment,
      username,
      createdOn: Date.now()
    }
  );

};

export const editComment = (postId, commentId, value) => {
  const updateComment = {};
  updateComment[`posts/${postId}/comments/${commentId}/comment`] = value;

  return update(ref(db), updateComment);
};

export const deleteComment = (postId, commentId) => {
  const updateComment = {};
  updateComment[`posts/${postId}/comments/${commentId}`] = null;

  return update(ref(db), updateComment);
};

export const likeComment = (postId, commentId, username) => {
  const updateCommentLikes = {};
  updateCommentLikes[`/posts/${postId}/comments/${commentId}/likedBy/${username}`] = true;

  return update(ref(db), updateCommentLikes);
};

export const dislikeComment = (postId, commentId, username) => {
  const updateCommentLikes = {};
  updateCommentLikes[`/posts/${postId}/comments/${commentId}/likedBy/${username}`] = null;

  return update(ref(db), updateCommentLikes);
};