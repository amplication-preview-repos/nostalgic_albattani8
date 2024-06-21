import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BlogPostService } from "./blogPost.service";
import { BlogPostControllerBase } from "./base/blogPost.controller.base";

@swagger.ApiTags("blogPosts")
@common.Controller("blogPosts")
export class BlogPostController extends BlogPostControllerBase {
  constructor(
    protected readonly service: BlogPostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
