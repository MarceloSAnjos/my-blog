import React from 'react';

import Icons from './Icons';
import links from './content';

import * as S from './styled';

const SocialLinks = () => (
  <S.SocialLinksWrapper>

    <S.SocialLinksList>
      {links.map((link, i) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItems key={i}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconsWrapper>
                <Icon />
              </S.IconsWrapper>

            </S.SocialLinksLink>
          </S.SocialLinksItems>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
)

export default SocialLinks;