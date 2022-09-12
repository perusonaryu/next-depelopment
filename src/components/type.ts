export type Props = {
  quantity?: number;
  blogData?: [
    blogItem: {
      id: string;
      title: string;
      description: string;
      createdAt: string;
    }
  ];
  contactValues?: {
    subject: string;
    name: string;
    message: string;
  };
  portfolioData?: [
    portfolioItem: {
      id: string;
      title: string;
      description: string;
      startDate: Date;
      endDate: Date;
      thumbnail: {
        url: string;
      };
    }
  ];
  twitterData?: {
    userInfo: {
      id: string;
      name: string;
      profile_image_url: string;
      username:string
    };
    tweets: [
      tweet: {
        id: string;
        text: string;
        created_at: Date;
      }
    ];
  };
};
