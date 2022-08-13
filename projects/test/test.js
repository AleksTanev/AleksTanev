console.log("first message");
const fn = async () => {

  // try {
    const res = await Promise.resolve(1);
    throw new Error('forcing an error')

  // } catch (error) {
  //   console.log(error.message);
  // }
}

const wrapper = async () => {
  await fn();
  console.log("following message")
}

wrapper().catch(console.error)

