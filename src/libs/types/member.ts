import { ObjectId } from "mongoose";
import { memberStatus, memberType } from "../enums/member.enum";
import { Session } from "express-session";
import { Request } from "express";

export interface Member {
  _id: ObjectId;
  memberType: memberType;
  memberStatus: memberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberInput {
  memberType?: memberType;
  memberStatus?: memberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress: string;
  memberDesc?: string;
  memberImage?: string;
  memberPoints?: number;
}
export interface MemberUpdateInput {
  _id: ObjectId;
  memberStatus?: memberStatus;
  memberNick?: string;
  memberPhone?: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImage?: string;
}
export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}

export interface ExtendedRequest extends Request {
  member: Member;
  file: Express.Multer.File;
  files: Express.Multer.File[];
}
export interface AdminRequest extends Request {
  member: Member;
  session: Session & { member: Member };
  file: Express.Multer.File;
  files: Express.Multer.File[];
}
