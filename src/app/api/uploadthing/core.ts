/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
    imageUploader: f({
        image: {
            maxFileSize: "4MB",
            maxFileCount: 1,
        },
    })
    .onUploadComplete(async ({ metadata, file }) => {
        // console.log("Upload complete for userId:", metadata);

        // console.log("file url", file.url);

        return { uploadedBy: file.url };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;