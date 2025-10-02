import {Session} from 'next-auth'

export interface IProfileUser {
    session: Session | null;
    status: string;
}