"use client";

import { CrossmintProvider, CrossmintHostedCheckout } from "@crossmint/client-sdk-react-ui";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  // 쿼리 파라미터로 templateId 동적 수신
    const templateId = router.query.templateId as string;

    const clientApiKey = process.env.NEXT_PUBLIC_CLIENT_API_KEY as string;
    const collectionId = process.env.NEXT_PUBLIC_COLLECTION_ID as string;


    return (
        <div className="flex flex-col items-center justify-start h-screen p-6 bg-white">
            <CrossmintProvider apiKey={clientApiKey}>
                <div className="max-w-[450px] w-full">
                    <CrossmintHostedCheckout
                        lineItems={{
                            collectionLocator: `crossmint:${collectionId}:${templateId}`,
                            callData: {
                                totalPrice: "3",
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