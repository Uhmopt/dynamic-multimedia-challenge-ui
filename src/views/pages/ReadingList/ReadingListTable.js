import { Add } from "@mui/icons-material";
import { Alert, AlertTitle, Button, Grid } from "@mui/material";
import CustomTypo from "components/CustomTypo";
import { formatArray } from "lib/arrayObject";
import { getReadingList } from "models/readingListModel";
import { useEffect, useState } from "react";

export default function ReadingListTable({ user = {} }) {
  const [data, setData] = useState([]);

  const loadData = () => {
    getReadingList({
      user_id: user?.id ?? "",
      onFinish: (res) => {
        setData(formatArray(res));
      },
    });
  };

  const handleRemove = (value, valueIndex) => {};

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  return (
    <div>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item>
          <Button variant="contained" color="warning" startIcon={<Add />}>
            Add
          </Button>
        </Grid>

        {formatArray(data).map((item, itemIndex) => (
          <Grid key={itemIndex} item lg={12} md={12} sm={12} xs={12}>
            <Alert
              severity="warning"
              icon={false}
              onClose={() => handleRemove(item, itemIndex)}
            >
              <AlertTitle>
                <CustomTypo variant="h2" color="black">
                  {item?.title ?? ""}
                </CustomTypo>
              </AlertTitle>
              <CustomTypo variant="body2" color="warning">
                {item?.author ?? ""}
              </CustomTypo>
            </Alert>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
