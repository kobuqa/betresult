import {api} from "./axios";
import {BidType} from "../types/bid.type";

export const makeBid = ({sum, totalLess}: BidType) => api.get<{result: number}>(`/games/result?sum=${sum}&totalLess=${totalLess}`);
