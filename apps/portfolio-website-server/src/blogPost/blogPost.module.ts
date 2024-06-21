import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BlogPostModuleBase } from "./base/blogPost.module.base";
import { BlogPostService } from "./blogPost.service";
import { BlogPostController } from "./blogPost.controller";
import { BlogPostResolver } from "./blogPost.resolver";

@Module({
  imports: [BlogPostModuleBase, forwardRef(() => AuthModule)],
  controllers: [BlogPostController],
  providers: [BlogPostService, BlogPostResolver],
  exports: [BlogPostService],
})
export class BlogPostModule {}
