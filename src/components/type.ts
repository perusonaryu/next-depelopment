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
  };