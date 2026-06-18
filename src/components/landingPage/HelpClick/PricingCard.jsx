import React from "react";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";
import StatusIcon from "../../shared/StatusIcon";
import { premiumIcon } from "../../../constant";

import { tikIcon, crossIcon } from "../../../constant";
import Badge from "../../shared/Badge";

const PricingCard = ({ plan }) => {
  return (
    <div
      className={`
        relative
        rounded-[28px]
        bg-white
        p-5
        md:p-6
        shadow-research-card

     
      `}
    >
      <div className="flex gap-5 md:gap-6">
        {/* Left Side */}
        <div
          className="
            relative
            flex
            w-[140px]
            shrink-0
            flex-col
            items-center
            justify-center
            rounded-2xl
            bg-plan-card-bg
            px-4
            py-10
          "
        >
          {plan.badge && (
            <Badge
              text="Premium"
              className="absolute -top-5 left-0 right-0 w-full max-w-full! flex-center"
            />
          )}

          <Heading
            as="h3"
            className="text-center text-research-profile-title-two font-semibold"
          >
            {plan.title}
          </Heading>

          <Text className="mt-1 text-center text-plan-card-subtitle">
            {plan.subtitle}
          </Text>
        </div>

        {/* Right Side */}
        <div className="flex flex-1 flex-col justify-center">
          <ul className="space-y-4">
            {plan.features.map((feature) => (
              <li key={feature.text} className="flex items-start gap-3">
                <StatusIcon
                  icon={feature.active ? tikIcon : crossIcon}
                  className={
                    feature.active
                      ? "bg-research-logo-circle-bg"
                      : "bg-gray-300"
                  }
                />

                <Text
                  as="span"
                  className={
                    feature.active
                      ? "text-plan-card-active-feature"
                      : "text-member-ship-text"
                  }
                >
                  {feature.text}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button
        className={`
          mt-6
          w-full
          rounded-full
          py-4

          ${
            plan.featured
              ? "bg-gradient-to-r from-[#1E3A8A] to-[#2F5BD0] text-white"
              : "border border-primary bg-white text-primary"
          }
        `}
      >
        {plan.buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
