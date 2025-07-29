type AvatarOthers = {
  name: string;
  image: string;
};

export const AVATAR_LINK: { my: string; others: AvatarOthers[] } = {
  my: 'https://images.unsplash.com/photo-1593260853607-d0e0f639bdab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNpYW4lMjBiZWF1dHl8ZW58MHx8MHx8fDI%3D',
  others: [
    {
      name: '朵拉公主',
      image:
        'https://images.unsplash.com/photo-1653032921901-4286b88b676c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGtvcmVhJTIwZ2lybHxlbnwwfHwwfHx8Mg%3D%3D',
    },
    {
      name: '喬妹',
      image:
        'https://images.unsplash.com/photo-1750231210987-485cca56b3b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGtvcmVhJTIwZ2lybHxlbnwwfHwwfHx8Mg%3D%3D',
    },
    {
      name: 'Cherry',
      image:
        'https://images.unsplash.com/photo-1728546679568-5f5d7a3c1ec2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYyfHxrb3JlYSUyMGdpcmx8ZW58MHx8MHx8fDI%3D',
    },
  ],
};
