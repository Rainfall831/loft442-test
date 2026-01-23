export const structure = (S: any) =>
  S.list()
    .title("Loft442 Admin")
    .items([
      S.listItem()
        .title("Availability Calendar")
        .child(
          S.document()
            .schemaType("availability")
            .documentId("availability")
            .title("Availability Calendar")
        ),
    ]);
