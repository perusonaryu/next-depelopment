export type Props = {
    quantity?: number;
    blogData?:[
      blogItem:{
        id: string;
        title: string;
        description: string;
        createdAt:string;
      }
    ];
    contactValues?:{
      subject:string;
      name:string;
      message:string;
    }
    portfolioData?:[
      portfolioItem:{
        id:string;
        title:string;
        description:string;
        startDate:Date;
        endDate:Date;
        thumbnail:{
          url:string;
        }
      }
    ]
  };