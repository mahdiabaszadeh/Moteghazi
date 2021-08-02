import {
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import ChatIcon from "@material-ui/icons/Chat";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import SmsIcon from "@material-ui/icons/Sms";
import TelegramIcon from "@material-ui/icons/Telegram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { green } from "@material-ui/core/colors";
import React from "react";

const Item = (props) => {
  const data = props.data.requirement;
  console.log(data);
  return (
    <Container fixed>
      {data && (
        <div className="item-details-container">
          <div className="right-content">
            <CardMedia
              component="img"
              alt={data.title}
              height="240"
              image={`https://moteghazi.com/image/requirement/${data.code}/256/${data.images[0]}`}
              title={data.title}
            />
            <div className="notifications-icons">
              <EmailIcon
                style={{ color: data.notificationType.email && green[500] }}
              />
              <CallIcon
                style={{ color: data.notificationType.call && green[500] }}
              />
              <ChatIcon
                style={{ color: data.notificationType.chat && green[500] }}
              />
              <InstagramIcon
                style={{ color: data.notificationType.instagram && green[500] }}
              />
              <PhoneAndroidIcon
                style={{ color: data.notificationType.phone && green[500] }}
              />
              <SmsIcon
                style={{ color: data.notificationType.sms && green[500] }}
              />
              <TelegramIcon
                style={{ color: data.notificationType.telegram && green[500] }}
              />
              <WhatsAppIcon
                style={{ color: data.notificationType.whatsapp && green[500] }}
              />
            </div>
          </div>
          <div className="left-content">
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {data.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="h3">
                {`کد محصول: ${data.code}`}
              </Typography>
              <Typography variant="body4" color="textSecondary" component="p">
                <span>
                    {` تاریخ شروع درخواست: ${data.createDate.substr(0,10)}`}
                </span>
                <br />
                <span>
                    {` تاریخ پایان درخواست: ${data.expireDate.substr(0,10)}`}
                </span>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.description}
              </Typography>
            </CardContent>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Item;
