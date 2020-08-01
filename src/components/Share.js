import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ShareIcon from '../images/icon-share.svg';
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function PopoverPopupState() {
  return (
    <div className="share-button">
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div>
            <button
              className="share-button"
              variant="contained"
              color="white"
              {...bindTrigger(popupState)}
            >
              <img src={ShareIcon} />
            </button>
            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <Box p={2}>
                <Typography>
                  <div className="social-container">
                    <a
                      href="https://www.facebook.com"
                      className="facebook social"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a
                      href="https://www.twitter.com"
                      className="twitter social"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a
                      href="https://www.instagram.com"
                      className="instagram social"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  </div>
                </Typography>
              </Box>
            </Popover>
          </div>
        )}
      </PopupState>
    </div>
  );
}
