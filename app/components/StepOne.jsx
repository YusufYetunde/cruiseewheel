"use client";
import React, { useMemo, useState, useEffect } from "react";
import { Form } from "./ui/form";
import DateTimeForm from "./DateTimeForm";
import { pickupTime } from "../data";
import SelectForm from "./SelectForm";
import { Country, State, City } from "country-state-city";
import CitySelect from "./CitySelect";
import dynamic from "next/dynamic";
import { useForm, Controller } from
 "react-hook-form";
import { differenceInYears, isAfter, isBefore } from "date-fns";
import { useRouter } from "next/navigation";

const StepOne = ({ form }) => {
  const [getCities, setGetCities] = useState([]);
  const [getSource, setSource] = useState(null);
  const [getDestination, setDestination] = useState(null);
  const {  watch, setError, clearErrors } = useForm();

  const dob = watch("dob");
  

  useEffect(() => {
    const fetchCities = async () => {
      const states = State.getStatesOfCountry("NG");
      let cities = [];
      states.forEach((state) => {
        const stateCities = City.getCitiesOfState("NG", state.isoCode);
        cities = [...cities, ...stateCities];
      });
      setGetCities(cities);
    };

    fetchCities();
  }, []);

  useEffect(() => {
    if (dob) {
      const age = differenceInYears(new Date(), new Date(dob));
      if (age < 16) {
        setError("dob", { type: "manual", message: "Not up to age" });
        alert("Not up to age");
      } else {
        clearErrors("dob");
      }
    }
  }, [dob, setError, clearErrors]);

  const Map = useMemo(
    () => dynamic(() => import("./Map")),
    [getSource, getDestination]
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-10 md:mx-[10%] my-10">
      <Form {...form}>
        <form className="w-full bg-white p-5 shadow-md border">
        <DateTimeForm
            id="dob"
            label="Date of Birth"
            control={form.control}
          />
          <DateTimeForm
            id="pickupdate"
            label="Pickup Date"
            control={form.control}
          />
          <SelectForm
            id="pickuptime"
            label="Pickup Time"
            placeholder="Set pickup time"
            list={pickupTime}
            control={form.control}
          />
          <CitySelect
            id="source"
            label="Source"
            placeholder="Select your starting place"
            list={getCities}
            setValue={setSource}
            control={form.control}
          />
          <CitySelect
            id="destination"
            label="Destination"
            placeholder="Select your ending place"
            list={getCities}
            setValue={setDestination}
            control={form.control}
          />
          <SelectForm
            id="persons"
            label="Persons"
            placeholder="Select Persons"
            list={[1, 2, 3, 4, 5, 6]}
            control={form.control}
          />
          <SelectForm
            id="transfertype"
            label="Transfer Type"
            placeholder="Select transfer type"
            list={["one way", "return"]}
            control={form.control}
          />
        </form>
      </Form>
      <div className="flex justify-start flex-col">
        <Map getSource={getSource} getDestination={getDestination} />
      </div>
    </div>
  );
};

export default StepOne;
