import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BlogPostResolverBase } from "./base/blogPost.resolver.base";
import { BlogPost } from "./base/BlogPost";
import { BlogPostService } from "./blogPost.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BlogPost)
export class BlogPostResolver extends BlogPostResolverBase {
  constructor(
    protected readonly service: BlogPostService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
