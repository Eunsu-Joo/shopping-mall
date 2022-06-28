import styled from "styled-components";

const Load= styled.div`
  display: inline-block;
  position: relative;
  width: 120px;
  height: 120px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
  border: 1px solid black;
  div{
    top: 32px;
    left: 32px;
    position: absolute;
    width: 60px;
    height: 60px;
    background: indianred;
    animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
    &:before,&:after{
      content: " ";
      position: absolute;
      display: block;
      width: 60px;
      height: 60px;
      background: indianred;
    }
    &:before{
      left: -28px;
      border-radius: 50% 0 0 50%;
    }
    &:after{
      top: -28px;
      border-radius: 50% 50% 0 0;
    }
    @keyframes lds-heart {
      0% {
        transform: scale(0.95);
      }
      5% {
        transform: scale(1.1);
      }
      39% {
        transform: scale(0.85);
      }
      45% {
        transform: scale(1);
      }
      60% {
        transform: scale(0.95);
      }
      100% {
        transform: scale(0.9);
      }
    }
  }
`
const Loading=() => {

    return <div>
        <Load>
            <div/>
        </Load>
        <p>Loading..</p>
    </div>
}
export default Loading