export interface IUser {
  avatar: string;
  citizen_identity_card: {
    date_of_exprity: string;
    date_of_issue: string;
    no: number;
  };
  created_time: null;
  email: string;
  full_name: string;
  password: string;
  profile: {
    address: string;
    city: null;
    date_of_birth: string;
    gender: string;
    graduate_active: string;
    identify_image: string;
    phone: string;
    province: string;
    signature: string;
    study_time: string;
  };
  role_user: {
    admin: boolean;
    manager: boolean;
    student: boolean;
    teacher: boolean;
  };
  school: [
    {
      created_time: null;
      department: {
        department_name: string;
        major: [
          {
            class: [
              {
                class_name: string;
                graduate_year: number;
                start_year: number;
              }
            ];
            major_name: string;
          }
        ];
      };
      is_active: boolean;
      level_count: string;
      school_id: string;
      school_name: string;
      school_type: string;
      updated_time: null;
    }
  ];
  updated_time: null;
  user_id: string;
  user_name: string;
  username: string;
}

export interface IUserUpdate {
  any;
}

export interface UsersResponse {
  count : number,
  data: IUser[]
}