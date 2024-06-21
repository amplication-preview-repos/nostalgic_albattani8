import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContactMessageModuleBase } from "./base/contactMessage.module.base";
import { ContactMessageService } from "./contactMessage.service";
import { ContactMessageController } from "./contactMessage.controller";
import { ContactMessageResolver } from "./contactMessage.resolver";

@Module({
  imports: [ContactMessageModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContactMessageController],
  providers: [ContactMessageService, ContactMessageResolver],
  exports: [ContactMessageService],
})
export class ContactMessageModule {}
