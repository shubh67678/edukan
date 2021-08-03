import React from "react";
import { useEffect, useState, useContext } from "react";
import { CartContent } from "../CartDetails";

export default function Cart() {
	const [test, addToCart] = useContext(CartContent);
	return <div></div>;
}
