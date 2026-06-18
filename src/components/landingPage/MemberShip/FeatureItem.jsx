import React from "react";
import Text from "../../ui/Text";
import StatusIcon from "../../shared/StatusIcon";
import { tikIcon } from "../../../constant";

const FeatureItem = ({ title }) => {
  return (
    <li className="flex items-center gap-3">
      <StatusIcon
        className="bg-research-logo-circle-bg"
        icon={tikIcon}
        alt="tik_icon"
      />

      <Text as="span" className="text-feature-item-text text-sm font-medium">
        {title}
      </Text>
    </li>
  );
};

export default FeatureItem;
