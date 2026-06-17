import React from "react";
import ActiveTikIcon from "./ActiveTikIcon";
import Text from "../../ui/Text";

const FeatureItem = ({ title }) => {
  return (
    <li className="flex items-center gap-3">
      <ActiveTikIcon />

      <Text as="span" className="text-feature-item-text text-sm font-medium">
        {title}
      </Text>
    </li>
  );
};

export default FeatureItem;
