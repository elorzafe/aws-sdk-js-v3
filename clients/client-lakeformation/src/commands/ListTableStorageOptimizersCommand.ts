// smithy-typescript generated code
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  ListTableStorageOptimizersRequest,
  ListTableStorageOptimizersRequestFilterSensitiveLog,
  ListTableStorageOptimizersResponse,
  ListTableStorageOptimizersResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListTableStorageOptimizersCommand,
  serializeAws_restJson1ListTableStorageOptimizersCommand,
} from "../protocols/Aws_restJson1";

export interface ListTableStorageOptimizersCommandInput extends ListTableStorageOptimizersRequest {}
export interface ListTableStorageOptimizersCommandOutput extends ListTableStorageOptimizersResponse, __MetadataBearer {}

/**
 * <p>Returns the configuration of all storage optimizers associated with a specified table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListTableStorageOptimizersCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListTableStorageOptimizersCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new ListTableStorageOptimizersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTableStorageOptimizersCommandInput} for command's `input` shape.
 * @see {@link ListTableStorageOptimizersCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class ListTableStorageOptimizersCommand extends $Command<
  ListTableStorageOptimizersCommandInput,
  ListTableStorageOptimizersCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListTableStorageOptimizersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListTableStorageOptimizersCommandInput, ListTableStorageOptimizersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "ListTableStorageOptimizersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListTableStorageOptimizersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListTableStorageOptimizersResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListTableStorageOptimizersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListTableStorageOptimizersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListTableStorageOptimizersCommandOutput> {
    return deserializeAws_restJson1ListTableStorageOptimizersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
