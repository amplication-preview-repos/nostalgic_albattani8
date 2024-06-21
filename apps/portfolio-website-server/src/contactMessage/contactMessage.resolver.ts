import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContactMessageResolverBase } from "./base/contactMessage.resolver.base";
import { ContactMessage } from "./base/ContactMessage";
import { ContactMessageService } from "./contactMessage.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContactMessage)
export class ContactMessageResolver extends ContactMessageResolverBase {
  constructor(
    protected readonly service: ContactMessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
