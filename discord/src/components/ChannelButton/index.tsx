import React from 'react';

import { Container, HashIcon, InviteIcon, SettingsIcon } from './styles';

export interface Props {
  channelName: string;
  selected?: boolean;
}

const ChannelButton: React.FC<Props> = ({ selected, channelName }) => {
  return (
    <Container className={selected ? 'active' : ''}>
      <div>
        <HashIcon />
        <span>{channelName}</span>
      </div>

      <div>
        <InviteIcon />
        <SettingsIcon />
      </div>
    </Container>
  );
}

export default ChannelButton;