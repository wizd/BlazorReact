import React from 'react';
import { FunctionComponent, useCallback, useEffect } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import WalletSelect from "./WalletSelect";
import "./OpenWallet.css";

const OpenWallet: FunctionComponent = () => {

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="open-wallet">
      <div className="rectangle-div" />
      <div className="sign-in">Open Wallet</div>
      <TextField
        className="box-2"
        sx={{ width: 291 }}
        color="primary"
        variant="standard"
        type="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
        size="medium"
        margin="normal"
        required
      />
      <div className="forgot-password-copy-2">Forgot password?</div>
      <div className="entrytab">
        <div className="group-div" />
      </div>
      <button className="button-shape-2" data-animate-on-scroll>
        <div className="controls-buttons-big-acti" />
        <div className="button-shape" />
        <div className="label">Open</div>
      </button>
      <div className="sign-up">
        Create
      </div>
      <div className="account-card">
        <div className="account-card1">
          <WalletSelect />
          <div className="account-card2">Default Wallet</div>
          <img className="wallet-icon" alt="" src="/imgs/wallet.svg" />
        </div>
      </div>
    </div>
  );
};

export default OpenWallet;
