
export interface User {
  _id?: string;  
  email: string;
  password?: string; 
  createdAt?: Date;
  isActive?: boolean;

  profile: UserProfile;
}

export interface UserProfile {
  name: string;
  username: string;
  profilePicture?: string;
}





