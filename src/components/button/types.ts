import {ReactNode} from 'react';

export interface IButton {
  isLinkButton?: boolean;
  isTabButton?: boolean;
  isCardButton?: boolean;
  isBackButton?: boolean;
  isClearCardButton?: boolean;
  isClearAllCardButton?: boolean;
  isLinkClubButton?: boolean;
  isRemoveCardButton?: boolean;
  onClickTabButton?: () => void;
  onClickCardButton?: () => void;
  onClickClearCardButton?: () => void;
  onClickClearAllCardButton?: () => void;
  isActiveTab?: boolean;
  clubID?: string;
  children?: ReactNode;
}
