import { Field, InputType } from "type-graphql";

@InputType()
export class createAppointmentInput {
    @Field()
    customerId: String;

    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}