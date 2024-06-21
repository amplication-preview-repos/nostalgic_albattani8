import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContactMessageService } from "./contactMessage.service";
import { ContactMessageControllerBase } from "./base/contactMessage.controller.base";

@swagger.ApiTags("contactMessages")
@common.Controller("contactMessages")
export class ContactMessageController extends ContactMessageControllerBase {
  constructor(
    protected readonly service: ContactMessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
