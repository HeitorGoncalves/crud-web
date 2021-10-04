import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

`;


export const Table = styled.table`

  width: 600px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .link {
      background: #00BC12;
      color: #fff;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
      margin-bottom: 10px;
  }

  img {
    width: 40%;
    display: flex;
    align-content: center;
    align-items: center;
    margin: 5px 30%;
  }

  table {
      width: 100%;
      border: none;
  }
  
  table tr {
    background: #eee;
  }
  
  th {
    color: #000;
    margin-bottom: 15px;
    border: none;
    background: #cdcdcd;
    padding: 10px;
    width: 100%;
    text-align: left;
  }

  td {
    border: none;
    padding: 5px;
  }

  
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  

`;


export const Form = styled.form`
    width: 400px;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 100%;
        margin: 10px 0 40px;
    }
    p {
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 10px;
        width: 100%;
        text-align: center;
    }
    input {
        flex: 1;
        height: 46px;
        margin-bottom: 15px;
        padding: 10px 20px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #ddd;
        &::placeholder {
        color: #999;
        }
    }
    button {
        color: #fff;
        font-size: 16px;
        background: #00BC12;
        height: 56px;
        border: 0;
        border-radius: 5px;
        width: 100%;
    }
    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }
    a {
        font-size: 16;
        font-weight: bold;
        color: #999;
        text-decoration: none;
    }

`;