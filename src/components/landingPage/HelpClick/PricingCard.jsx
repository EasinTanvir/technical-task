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
        p-6
        md:p-6
        shadow-research-card

     
      `}
    >
      <div className="flex sm:flex-row flex-col gap-5 md:gap-6">
        {/* Left Side */}
        <div
          className="
            relative
            flex
            sm:w-37.5
            w-full
            shrink-0
            flex-col
            items-center
            justify-center
            rounded-2xl
            bg-plan-card-bg
            px-4
            py-13
          "
        >
          {plan.badge && (
            <Badge
              iconClassName="mt-1"
              Isicon
              icon={premiumIcon}
              alt="Premium"
              text="Premium"
              className="
      absolute
      -top-4
      left-1/2
      -translate-x-1/2
      pe-4
      ps-2
      py-1
    "
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
          <ul className="sm:space-y-4 space-y-3.5">
            {plan.features.map((feature) => (
              <li
                key={feature.text}
                className="flex items-start sm:gap-3 gap-2"
              >
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
                  className={`${feature.active ? "text-plan-card-active-feature" : "text-member-ship-text"} text-start!`}
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
          sm:py-4
          py-3
          text-lg font-semibold

          ${
            plan.featured
              ? "bg-pricing-card-button-bg text-white shadow-pricing-card-shadow"
              : "pricing-card-button-border text-research-profile-title-one "
          }
        `}
      >
        {plan.buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
