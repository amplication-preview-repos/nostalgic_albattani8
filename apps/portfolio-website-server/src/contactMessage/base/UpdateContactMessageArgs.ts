/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactMessageWhereUniqueInput } from "./ContactMessageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ContactMessageUpdateInput } from "./ContactMessageUpdateInput";

@ArgsType()
class UpdateContactMessageArgs {
  @ApiProperty({
    required: true,
    type: () => ContactMessageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ContactMessageWhereUniqueInput)
  @Field(() => ContactMessageWhereUniqueInput, { nullable: false })
  where!: ContactMessageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ContactMessageUpdateInput,
  })
  @ValidateNested()
  @Type(() => ContactMessageUpdateInput)
  @Field(() => ContactMessageUpdateInput, { nullable: false })
  data!: ContactMessageUpdateInput;
}

export { UpdateContactMessageArgs as UpdateContactMessageArgs };
