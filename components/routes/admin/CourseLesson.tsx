"use client";

import InputFile from "@/components/ui/InputFile";
import InputText from "@/components/ui/InputText";
import InputTextArea from "@/components/ui/InputTextArea";
import { LessonDetails } from "@/types/api/responses/IGetAdminCourseDetails";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface IProps {
  details?: LessonDetails;
}

const CourseLesson: FC<IProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const formMethods = useForm<LessonDetails>({
    defaultValues: props.details,
  });
  const { handleSubmit } = formMethods;
  const onSubmit = (data: any) => {};

  return (
    <div>
      {/* Toggle Header */}
      {props.details && (
        <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <h5 className="text-accent">{props.details?.title ?? "New Lesson"}</h5>
          <IconButton>{isOpen ? <ExpandLess /> : <ExpandMore />}</IconButton>
        </div>
      )}

      {/* Collapsible Content */}
      {(isOpen || !props.details) && (
        <div className="p-4 space-y-3 border-2 rounded-lg">
          <FormProvider {...formMethods}>
            <InputText name="title" label="Lesson Title" placeholder="Module Name" />
            <InputText name="duration" label="Lesson duration" placeholder="Module Name" />

            <InputFile
              name="image"
              label="Upload Lesson Content"
              accept=".pdf, .doc, .docx, .RTF"
              placeholder="Click to upload"
            />

            <button className="btn btn-accent w-full block">Save Lesson</button>
          </FormProvider>
        </div>
      )}
    </div>
  );
};

export default CourseLesson;
