import profileReducer, {addPostActionCreator, deletePost} from "./profile_reducer";

let state = {posts: [
    {id: 0, text: 'Hi', likesCount: '12', ava: 'https://ru-static.z-dn.net/files/dcd/4e5cc0ed36e2dd53bf9518fd16a72492.jpg'},
    {id: 1, text: "It's my first post", likesCount: '10', ava: 'https://friendtok.com/upload/photos/2021/03/BlRShw5IG5475RTXDDug_13_a14f8774a0d7d770faff995ddbbac266_avatar_full.jpg'},
    {id: 2, text: 'test', likesCount: '8', ava: 'https://demotivation.ru/wp-content/uploads/2020/11/d5ebbfe10aff8e9a5c281400a2151b20-digital-illustration-design-illustrations.jpg'},
    {id: 3, text: 'second post', likesCount: '5', ava: 'https://i.pinimg.com/736x/49/77/fe/4977fe60931071da34910703120c6040.jpg'},
  ]}

test('new post should be added', () => {
  let action = addPostActionCreator('test')
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(5)
});

test('new post.message should be correct', () => {
  let action = addPostActionCreator('test')
  let newState = profileReducer(state, action)
  expect(newState.posts[4].text).toBe('test')
});

test('after deleting post length of array post should be decrement', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3)
});

test('after deleting length should not be decrement if id incorrect', () => {
  let action = deletePost(1000)
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(4)
});
