import { ref, remove, set, get } from 'firebase/database';
import { db } from '../config/firebase-config';
import { getAllPosts } from './posts.service';


export const fromTagsDocument = snapshot => {
  const tagsDocument = snapshot.val();

  return Object.keys(tagsDocument).map(key => {
    const tags = tagsDocument[key];

    return {
      ...tags
    };
  });
};
export const getAllTags = () => {
  return get(ref(db, 'tags'))
    .then(snapshot => {
      if (!snapshot.exists()) {
        return [];
      }

      return fromTagsDocument(snapshot);
    });
};

export const addTags = (tags) => {
  const tagsArr = tags.split(',');

  tagsArr.forEach(tag => {
    const reference = ref(db, 'tags/' + tag);

    set(reference, {
      tag
    });
  });
};

export const removeTag = (tag) => {
  getAllPosts()
    .then(res => res.filter(  (obj)  => {
      return obj.tags?.split(',').includes(tag);}))
    .then(res => {
      if (res.length === 1) {
        remove(ref(db, 'tags/' + tag));
      }
    })
    .catch(console.error);
};

export const updateTag = (tag, value) => {
  getAllPosts()
    .then(res => res.filter( (obj) => obj.tags?.split(',').includes(tag)))
    .then (res => {
      if (res.length === 1) {
        const oldReference = ref(db, 'tags/' + tag);
        remove(oldReference)
          .catch(console.error);
      }
      set(ref(db, 'tags/' + value), {
        tag: value
      })
        .catch(console.error);
    });

};
