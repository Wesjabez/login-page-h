import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MacBookAir2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 3:20 */
export const MacBookAir2: FC<Props> = memo(function MacBookAir2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.image4}></div>
      <div className={classes.frame6}>
        <div className={classes.frame7}>
          <button className={classes.lOGIN}>LOG IN </button>
        </div>
        <div className={classes.frame8}>
          <button className={classes.sIGNUP}>SIGN UP</button>
        </div>
        <div className={classes.frame10}></div>
        <div className={classes.frame11}></div>
        <input type = "text"  className={classes.uSERNAME}>USER NAME</input>
        <input type = "password" className={classes.pASSWORD}>PASSWORD</input>
      </div>
      <div className={classes.frame9}>
        <div className={classes.hELLOPIC1}></div>
      </div>
    </div>
  );
});
