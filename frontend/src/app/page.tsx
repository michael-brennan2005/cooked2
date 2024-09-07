"use client";

import { fetchAllRecipes } from "@/api/recipe";
import Card from "@/components/card/card";
import Navbar from "@/components/Navbar/Navbar";
import CreateRecipe from "@/forms/CreateRecipe";
import { Modal } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["recipes"],
  //   queryFn: fetchAllRecipes,
  // });

  const data = [
    {
      id: 1,
      name: "Spaghetti",
      cook_duration: "30 mins",
      image_url:
        "https://images.unsplash.com/photo-1606786427333-2b5b2d2a0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkxNjN8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjE5NjQ4NjI5&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 2,
      name: "Pizza",
      cook_duration: "45 mins",
      image_url:
        "https://images.unsplash.com/photo-1606786427333-2b5b2d2a0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkxNjN8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjE5NjQ4NjI5&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 3,
      name: "Burger",
      cook_duration: "25 mins",
      image_url:
        "https://images.unsplash.com/photo-1606786427333-2b5b2d2a0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkxNjN8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjE5NjQ4NjI5&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 4,
      name: "Spaghetti",
      cook_duration: "30 mins",
      image_url:
        "https://images.unsplash.com/photo-1606786427333-2b5b2d2a0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkxNjN8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjE5NjQ4NjI5&ixlib=rb-1.2.1&q=80&w=400",
    },
    {
      id: 5,
      name: "Pizza",
      cook_duration: "45 mins",
      image_url:
        "https://images.unsplash.com/photo-1606786427333-2b5b2d2a0c0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkxNjN8MHwxfGFsbHwxfHx8fHx8fHx8fHwxNjE5NjQ4NjI5&ixlib=rb-1.2.1&q=80&w=400",
    },
  ];

  return (
    <>
      <Modal
        className="flex flex-col items-center justify-center"
        open={isModalOpen}
        disableAutoFocus
        onClose={() => setIsModalOpen(false)}
      >
        <div className="bg-primary flex flex-col items-center p-16 w-[550px] h-[600px] overflow-scroll rounded-lg">
          <CreateRecipe onSuccess={() => setIsModalOpen(false)} />
        </div>
      </Modal>
      <Navbar createRecipe={() => setIsModalOpen(true)} />
      <div className="flex flex-row flex-wrap p-16 items-start justify-between gap-y-5">
        {data?.map((recipe) => (
          <Card
            key={recipe.id} // Add a unique key prop
            img={recipe.image_url}
            title={recipe.name}
            duration={recipe.cook_duration}
            createRecipe={() => {}}
          />
        ))}
      </div>
    </>
  );
}
