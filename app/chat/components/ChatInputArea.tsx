"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { RiImageFill } from "@remixicon/react";
import { ImagePreview } from "./ImagePreview";

export function ChatInputArea() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  // preview URL 생성
  const previewUrl = useMemo(() => {
    if (!imageFile) return null;
    return URL.createObjectURL(imageFile);
  }, [imageFile]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImageFile(file);
  };

  const handleSend = async () => {
    if (!message && !imageFile) return;

    const formData = new FormData();

    if (imageFile) {
      formData.append("image", imageFile);
    } else if (message) {
      formData.append("message", message);
    }

    try {
      setMessage("");
      setImageFile(null);
      alert("전송 성공!");
    } catch (err) {
      console.error(err);
      alert("전송 실패");
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  return (
    <div className="border-border px-wrapper flex flex-col justify-between gap-1.75 border-t py-1.25 sm:gap-3.75 sm:px-7.5 sm:py-2.5">
      {!imageFile ? (
        <textarea
          name="message"
          id="message"
          placeholder="메세지를 입력해 주세요."
          className="h-20 resize-none outline-none"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      ) : (
        <ImagePreview previewUrl={previewUrl!} onRemove={() => setImageFile(null)} />
      )}

      <div className="flex items-center justify-between">
        <label htmlFor="chat-image-upload">
          <div className="bg-border flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow-md">
            <RiImageFill className="text-main" size={24} />
          </div>
        </label>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          id="chat-image-upload"
          onChange={handleImageChange}
        />

        <Button varient="default" width="sm" height="sm" fontSize="sm" onClick={handleSend}>
          전송
        </Button>
      </div>
    </div>
  );
}
