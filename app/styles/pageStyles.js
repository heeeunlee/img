import { css } from "styled-components";

const style = css`
  .relative {
    position: relative;
  }

  .logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 100px;
  }

  .main-contents {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 20px;
    font-family: "Work Sans", helvetica, Arial, sans-serif !important;
    font-weight: 400;
  }

  .in-b {
    /* position: absolute;
    top: 50%;
    transform: translateY(-50%); */
    display: inline-block;
    margin-right: 20px;
  }

  .text-center {
    position: absolute;
    top: 50%;

    /* transform: translateY(-50%); */

    left: 50%;
    /* transform: translateX(-50%); */
    /* text-align: center; */

    transform: translate(-50%, -50%);
    color: blue;
  }

  .first-text {
    font-size: 80px;
    color: blue;
  }

  .first-text {
    font-size: 20px;
    color: grey;
  }

  /* for test */
  .here {
    background: black;
  }
`;

export default style;
