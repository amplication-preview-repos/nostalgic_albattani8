/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FaqWhereInput } from "./FaqWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FaqListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FaqWhereInput,
  })
  @ValidateNested()
  @Type(() => FaqWhereInput)
  @IsOptional()
  @Field(() => FaqWhereInput, {
    nullable: true,
  })
  every?: FaqWhereInput;

  @ApiProperty({
    required: false,
    type: () => FaqWhereInput,
  })
  @ValidateNested()
  @Type(() => FaqWhereInput)
  @IsOptional()
  @Field(() => FaqWhereInput, {
    nullable: true,
  })
  some?: FaqWhereInput;

  @ApiProperty({
    required: false,
    type: () => FaqWhereInput,
  })
  @ValidateNested()
  @Type(() => FaqWhereInput)
  @IsOptional()
  @Field(() => FaqWhereInput, {
    nullable: true,
  })
  none?: FaqWhereInput;
}
export { FaqListRelationFilter as FaqListRelationFilter };