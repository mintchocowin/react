import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [filterdList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);

  return (
    <div>
      <SearchBox />
      {filterdList.map((item, idx) => (
        <ContactItem key={idx} item={item} />
      ))}
    </div>
  );
};

export default ContactList;
