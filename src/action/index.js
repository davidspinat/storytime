export default (dispatchWithObject) => {
  const dispatch = (type, payload) => dispatchWithObject({ type, payload });

  return {
    addStory: (payload) => dispatch('ADD_STORY', payload)
  };
};
