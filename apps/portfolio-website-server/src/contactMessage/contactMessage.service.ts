import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactMessageServiceBase } from "./base/contactMessage.service.base";

@Injectable()
export class ContactMessageService extends ContactMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
