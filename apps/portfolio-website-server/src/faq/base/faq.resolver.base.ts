/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Faq } from "./Faq";
import { FaqCountArgs } from "./FaqCountArgs";
import { FaqFindManyArgs } from "./FaqFindManyArgs";
import { FaqFindUniqueArgs } from "./FaqFindUniqueArgs";
import { CreateFaqArgs } from "./CreateFaqArgs";
import { UpdateFaqArgs } from "./UpdateFaqArgs";
import { DeleteFaqArgs } from "./DeleteFaqArgs";
import { FaqService } from "../faq.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Faq)
export class FaqResolverBase {
  constructor(
    protected readonly service: FaqService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "read",
    possession: "any",
  })
  async _faqsMeta(
    @graphql.Args() args: FaqCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Faq])
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "read",
    possession: "any",
  })
  async faqs(@graphql.Args() args: FaqFindManyArgs): Promise<Faq[]> {
    return this.service.faqs(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Faq, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "read",
    possession: "own",
  })
  async faq(@graphql.Args() args: FaqFindUniqueArgs): Promise<Faq | null> {
    const result = await this.service.faq(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Faq)
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "create",
    possession: "any",
  })
  async createFaq(@graphql.Args() args: CreateFaqArgs): Promise<Faq> {
    return await this.service.createFaq({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Faq)
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "update",
    possession: "any",
  })
  async updateFaq(@graphql.Args() args: UpdateFaqArgs): Promise<Faq | null> {
    try {
      return await this.service.updateFaq({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Faq)
  @nestAccessControl.UseRoles({
    resource: "Faq",
    action: "delete",
    possession: "any",
  })
  async deleteFaq(@graphql.Args() args: DeleteFaqArgs): Promise<Faq | null> {
    try {
      return await this.service.deleteFaq(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}