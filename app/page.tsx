"use client";

import { CrossmintProvider, CrossmintHostedCheckout } from "@crossmint/client-sdk-react-ui";

export default function Home() {
    const clientApiKey = process.env.NEXT_PUBLIC_CLIENT_API_KEY as string;
    const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID as string;

    const currentUserEmail = "user@example.com"; // 실제로는 로그인 시스템에서 값을 받아와야 함

    return (
        <div className="flex flex-col items-center justify-start h-screen p-6 bg-white">
            <CrossmintProvider apiKey={clientApiKey}>
                <div className="max-w-[450px] w-full">
                    <CrossmintHostedCheckout
                        lineItems={{
                            collectionLocator: `crossmint:${collectionId}`,
                            callData: {
                                totalPrice: "5",
                                quantity: 1,
                            },
                        }}
                        payment={{
                            crypto: { enabled: true },
                            fiat: { enabled: true },
                        }}   
                    />
                </div>
            </CrossmintProvider>
        </div>
    );
}