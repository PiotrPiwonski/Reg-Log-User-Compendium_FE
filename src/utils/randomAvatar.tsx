export const randomAvatar = () => {
  const arrayAvatar = [
    '/avatars/w1.png',
    '/avatars/w2.png',
    '/avatars/w3.png',
    '/avatars/w4.png',
    '/avatars/w5.png',
    '/avatars/w6.png',
  ];
  const random = Math.floor(Math.random() * arrayAvatar.length);
  return arrayAvatar[random];
};
