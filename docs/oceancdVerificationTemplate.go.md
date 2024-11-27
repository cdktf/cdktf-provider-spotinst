# `oceancdVerificationTemplate` Submodule <a name="`oceancdVerificationTemplate` Submodule" id="@cdktf/provider-spotinst.oceancdVerificationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdVerificationTemplate <a name="OceancdVerificationTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template spotinst_oceancd_verification_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplate(scope Construct, id *string, config OceancdVerificationTemplateConfig) OceancdVerificationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig">OceancdVerificationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig">OceancdVerificationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putArgs">PutArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putMetrics">PutMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetMetrics">ResetMetrics</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArgs` <a name="PutArgs" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putArgs"></a>

```go
func PutArgs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putArgs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetrics` <a name="PutMetrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putMetrics"></a>

```go
func PutMetrics(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putMetrics.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetArgs"></a>

```go
func ResetArgs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetMetrics` <a name="ResetMetrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetMetrics"></a>

```go
func ResetMetrics()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdVerificationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.OceancdVerificationTemplate_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.OceancdVerificationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.OceancdVerificationTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.OceancdVerificationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OceancdVerificationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OceancdVerificationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OceancdVerificationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OceancdVerificationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.args">Args</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList">OceancdVerificationTemplateArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metrics">Metrics</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList">OceancdVerificationTemplateMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.argsInput">ArgsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metricsInput">MetricsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.args"></a>

```go
func Args() OceancdVerificationTemplateArgsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList">OceancdVerificationTemplateArgsList</a>

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metrics"></a>

```go
func Metrics() OceancdVerificationTemplateMetricsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList">OceancdVerificationTemplateMetricsList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.argsInput"></a>

```go
func ArgsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetricsInput`<sup>Optional</sup> <a name="MetricsInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metricsInput"></a>

```go
func MetricsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdVerificationTemplateArgs <a name="OceancdVerificationTemplateArgs" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateArgs {
	ArgName: *string,
	Value: *string,
	ValueFrom: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.argName">ArgName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#arg_name OceancdVerificationTemplate#arg_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#value OceancdVerificationTemplate#value}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a></code> | value_from block. |

---

##### `ArgName`<sup>Required</sup> <a name="ArgName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.argName"></a>

```go
ArgName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#arg_name OceancdVerificationTemplate#arg_name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#value OceancdVerificationTemplate#value}.

---

##### `ValueFrom`<sup>Optional</sup> <a name="ValueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.valueFrom"></a>

```go
ValueFrom OceancdVerificationTemplateArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#value_from OceancdVerificationTemplate#value_from}

---

### OceancdVerificationTemplateArgsValueFrom <a name="OceancdVerificationTemplateArgsValueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateArgsValueFrom {
	SecretKeyRef: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `SecretKeyRef`<sup>Optional</sup> <a name="SecretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom.property.secretKeyRef"></a>

```go
SecretKeyRef OceancdVerificationTemplateArgsValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#secret_key_ref OceancdVerificationTemplate#secret_key_ref}

---

### OceancdVerificationTemplateArgsValueFromSecretKeyRef <a name="OceancdVerificationTemplateArgsValueFromSecretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef {
	Key: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#key OceancdVerificationTemplate#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#key OceancdVerificationTemplate#key}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}.

---

### OceancdVerificationTemplateConfig <a name="OceancdVerificationTemplateConfig" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Args: interface{},
	Id: *string,
	Metrics: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.args">Args</a></code> | <code>interface{}</code> | args block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.metrics">Metrics</a></code> | <code>interface{}</code> | metrics block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}.

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.args"></a>

```go
Args interface{}
```

- *Type:* interface{}

args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#args OceancdVerificationTemplate#args}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metrics`<sup>Optional</sup> <a name="Metrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.metrics"></a>

```go
Metrics interface{}
```

- *Type:* interface{}

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#metrics OceancdVerificationTemplate#metrics}

---

### OceancdVerificationTemplateMetrics <a name="OceancdVerificationTemplateMetrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetrics {
	MetricsName: *string,
	Provider: interface{},
	Baseline: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline,
	ConsecutiveErrorLimit: *f64,
	Count: *f64,
	DryRun: interface{},
	FailureCondition: *string,
	FailureLimit: *f64,
	InitialDelay: *string,
	Interval: *string,
	SuccessCondition: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.metricsName">MetricsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#metrics_name OceancdVerificationTemplate#metrics_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.provider">Provider</a></code> | <code>interface{}</code> | provider block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.baseline">Baseline</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a></code> | baseline block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.consecutiveErrorLimit">ConsecutiveErrorLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#consecutive_error_limit OceancdVerificationTemplate#consecutive_error_limit}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#count OceancdVerificationTemplate#count}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.dryRun">DryRun</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#dry_run OceancdVerificationTemplate#dry_run}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureCondition">FailureCondition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#failure_condition OceancdVerificationTemplate#failure_condition}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureLimit">FailureLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#failure_limit OceancdVerificationTemplate#failure_limit}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.initialDelay">InitialDelay</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#initial_delay OceancdVerificationTemplate#initial_delay}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.interval">Interval</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#interval OceancdVerificationTemplate#interval}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.successCondition">SuccessCondition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#success_condition OceancdVerificationTemplate#success_condition}. |

---

##### `MetricsName`<sup>Required</sup> <a name="MetricsName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.metricsName"></a>

```go
MetricsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#metrics_name OceancdVerificationTemplate#metrics_name}.

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.provider"></a>

```go
Provider interface{}
```

- *Type:* interface{}

provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#provider OceancdVerificationTemplate#provider}

---

##### `Baseline`<sup>Optional</sup> <a name="Baseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.baseline"></a>

```go
Baseline OceancdVerificationTemplateMetricsBaseline
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

baseline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#baseline OceancdVerificationTemplate#baseline}

---

##### `ConsecutiveErrorLimit`<sup>Optional</sup> <a name="ConsecutiveErrorLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.consecutiveErrorLimit"></a>

```go
ConsecutiveErrorLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#consecutive_error_limit OceancdVerificationTemplate#consecutive_error_limit}.

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#count OceancdVerificationTemplate#count}.

---

##### `DryRun`<sup>Optional</sup> <a name="DryRun" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.dryRun"></a>

```go
DryRun interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#dry_run OceancdVerificationTemplate#dry_run}.

---

##### `FailureCondition`<sup>Optional</sup> <a name="FailureCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureCondition"></a>

```go
FailureCondition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#failure_condition OceancdVerificationTemplate#failure_condition}.

---

##### `FailureLimit`<sup>Optional</sup> <a name="FailureLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureLimit"></a>

```go
FailureLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#failure_limit OceancdVerificationTemplate#failure_limit}.

---

##### `InitialDelay`<sup>Optional</sup> <a name="InitialDelay" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.initialDelay"></a>

```go
InitialDelay *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#initial_delay OceancdVerificationTemplate#initial_delay}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.interval"></a>

```go
Interval *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#interval OceancdVerificationTemplate#interval}.

---

##### `SuccessCondition`<sup>Optional</sup> <a name="SuccessCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.successCondition"></a>

```go
SuccessCondition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#success_condition OceancdVerificationTemplate#success_condition}.

---

### OceancdVerificationTemplateMetricsBaseline <a name="OceancdVerificationTemplateMetricsBaseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsBaseline {
	BaselineProvider: interface{},
	Threshold: *string,
	MaxRange: *f64,
	MinRange: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.baselineProvider">BaselineProvider</a></code> | <code>interface{}</code> | baseline_provider block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.threshold">Threshold</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#threshold OceancdVerificationTemplate#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.maxRange">MaxRange</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#max_range OceancdVerificationTemplate#max_range}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.minRange">MinRange</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#min_range OceancdVerificationTemplate#min_range}. |

---

##### `BaselineProvider`<sup>Required</sup> <a name="BaselineProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.baselineProvider"></a>

```go
BaselineProvider interface{}
```

- *Type:* interface{}

baseline_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#baseline_provider OceancdVerificationTemplate#baseline_provider}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.threshold"></a>

```go
Threshold *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#threshold OceancdVerificationTemplate#threshold}.

---

##### `MaxRange`<sup>Optional</sup> <a name="MaxRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.maxRange"></a>

```go
MaxRange *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#max_range OceancdVerificationTemplate#max_range}.

---

##### `MinRange`<sup>Optional</sup> <a name="MinRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.minRange"></a>

```go
MinRange *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#min_range OceancdVerificationTemplate#min_range}.

---

### OceancdVerificationTemplateMetricsBaselineBaselineProvider <a name="OceancdVerificationTemplateMetricsBaselineBaselineProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider {
	Datadog: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog,
	NewRelic: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic,
	Prometheus: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.datadog">Datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.newRelic">NewRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a></code> | prometheus block. |

---

##### `Datadog`<sup>Optional</sup> <a name="Datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.datadog"></a>

```go
Datadog OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#datadog OceancdVerificationTemplate#datadog}

---

##### `NewRelic`<sup>Optional</sup> <a name="NewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.newRelic"></a>

```go
NewRelic OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#new_relic OceancdVerificationTemplate#new_relic}

---

##### `Prometheus`<sup>Optional</sup> <a name="Prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.prometheus"></a>

```go
Prometheus OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#prometheus OceancdVerificationTemplate#prometheus}

---

### OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog {
	DatadogQuery: *string,
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.datadogQuery">DatadogQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}. |

---

##### `DatadogQuery`<sup>Required</sup> <a name="DatadogQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.datadogQuery"></a>

```go
DatadogQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

### OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic {
	NewRelicQuery: *string,
	Profile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.newRelicQuery">NewRelicQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.profile">Profile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}. |

---

##### `NewRelicQuery`<sup>Required</sup> <a name="NewRelicQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.newRelicQuery"></a>

```go
NewRelicQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}.

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}.

---

### OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus {
	PrometheusQuery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus.property.prometheusQuery">PrometheusQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}. |

---

##### `PrometheusQuery`<sup>Required</sup> <a name="PrometheusQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus.property.prometheusQuery"></a>

```go
PrometheusQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}.

---

### OceancdVerificationTemplateMetricsProvider <a name="OceancdVerificationTemplateMetricsProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProvider {
	CloudWatch: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch,
	Datadog: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog,
	Jenkins: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins,
	Job: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob,
	NewRelic: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic,
	Prometheus: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus,
	Web: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.cloudWatch">CloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a></code> | cloud_watch block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.datadog">Datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.jenkins">Jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a></code> | jenkins block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.job">Job</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a></code> | job block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.newRelic">NewRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a></code> | prometheus block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.web">Web</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a></code> | web block. |

---

##### `CloudWatch`<sup>Optional</sup> <a name="CloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.cloudWatch"></a>

```go
CloudWatch OceancdVerificationTemplateMetricsProviderCloudWatch
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

cloud_watch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#cloud_watch OceancdVerificationTemplate#cloud_watch}

---

##### `Datadog`<sup>Optional</sup> <a name="Datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.datadog"></a>

```go
Datadog OceancdVerificationTemplateMetricsProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#datadog OceancdVerificationTemplate#datadog}

---

##### `Jenkins`<sup>Optional</sup> <a name="Jenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.jenkins"></a>

```go
Jenkins OceancdVerificationTemplateMetricsProviderJenkins
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

jenkins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#jenkins OceancdVerificationTemplate#jenkins}

---

##### `Job`<sup>Optional</sup> <a name="Job" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.job"></a>

```go
Job OceancdVerificationTemplateMetricsProviderJob
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#job OceancdVerificationTemplate#job}

---

##### `NewRelic`<sup>Optional</sup> <a name="NewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.newRelic"></a>

```go
NewRelic OceancdVerificationTemplateMetricsProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#new_relic OceancdVerificationTemplate#new_relic}

---

##### `Prometheus`<sup>Optional</sup> <a name="Prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.prometheus"></a>

```go
Prometheus OceancdVerificationTemplateMetricsProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#prometheus OceancdVerificationTemplate#prometheus}

---

##### `Web`<sup>Optional</sup> <a name="Web" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.web"></a>

```go
Web OceancdVerificationTemplateMetricsProviderWeb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#web OceancdVerificationTemplate#web}

---

### OceancdVerificationTemplateMetricsProviderCloudWatch <a name="OceancdVerificationTemplateMetricsProviderCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderCloudWatch {
	MetricDataQueries: interface{},
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.metricDataQueries">MetricDataQueries</a></code> | <code>interface{}</code> | metric_data_queries block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}. |

---

##### `MetricDataQueries`<sup>Required</sup> <a name="MetricDataQueries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.metricDataQueries"></a>

```go
MetricDataQueries interface{}
```

- *Type:* interface{}

metric_data_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#metric_data_queries OceancdVerificationTemplate#metric_data_queries}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries {
	Id: *string,
	Expression: *string,
	Label: *string,
	MetricStat: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat,
	Period: *f64,
	ReturnData: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#expression OceancdVerificationTemplate#expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#label OceancdVerificationTemplate#label}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a></code> | metric_stat block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.period">Period</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#period OceancdVerificationTemplate#period}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.returnData">ReturnData</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#return_data OceancdVerificationTemplate#return_data}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#expression OceancdVerificationTemplate#expression}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#label OceancdVerificationTemplate#label}.

---

##### `MetricStat`<sup>Optional</sup> <a name="MetricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.metricStat"></a>

```go
MetricStat OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

metric_stat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#metric_stat OceancdVerificationTemplate#metric_stat}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.period"></a>

```go
Period *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#period OceancdVerificationTemplate#period}.

---

##### `ReturnData`<sup>Optional</sup> <a name="ReturnData" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.returnData"></a>

```go
ReturnData interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#return_data OceancdVerificationTemplate#return_data}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat {
	Metric: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric,
	MetricPeriod: *f64,
	Stat: *string,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metricPeriod">MetricPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#metric_period OceancdVerificationTemplate#metric_period}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.stat">Stat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#stat OceancdVerificationTemplate#stat}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#unit OceancdVerificationTemplate#unit}. |

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metric"></a>

```go
Metric OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#metric OceancdVerificationTemplate#metric}

---

##### `MetricPeriod`<sup>Optional</sup> <a name="MetricPeriod" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metricPeriod"></a>

```go
MetricPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#metric_period OceancdVerificationTemplate#metric_period}.

---

##### `Stat`<sup>Optional</sup> <a name="Stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.stat"></a>

```go
Stat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#stat OceancdVerificationTemplate#stat}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#unit OceancdVerificationTemplate#unit}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric {
	MetricName: *string,
	Dimensions: interface{},
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.metricName">MetricName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#metric_name OceancdVerificationTemplate#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#namespace OceancdVerificationTemplate#namespace}. |

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.metricName"></a>

```go
MetricName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#metric_name OceancdVerificationTemplate#metric_name}.

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#dimensions OceancdVerificationTemplate#dimensions}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#namespace OceancdVerificationTemplate#namespace}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions {
	DimensionName: *string,
	DimensionValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionName">DimensionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#dimension_name OceancdVerificationTemplate#dimension_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionValue">DimensionValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#dimension_value OceancdVerificationTemplate#dimension_value}. |

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionName"></a>

```go
DimensionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#dimension_name OceancdVerificationTemplate#dimension_name}.

---

##### `DimensionValue`<sup>Required</sup> <a name="DimensionValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionValue"></a>

```go
DimensionValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#dimension_value OceancdVerificationTemplate#dimension_value}.

---

### OceancdVerificationTemplateMetricsProviderDatadog <a name="OceancdVerificationTemplateMetricsProviderDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderDatadog {
	DatadogQuery: *string,
	Duration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.datadogQuery">DatadogQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.duration">Duration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}. |

---

##### `DatadogQuery`<sup>Optional</sup> <a name="DatadogQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.datadogQuery"></a>

```go
DatadogQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}.

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

### OceancdVerificationTemplateMetricsProviderJenkins <a name="OceancdVerificationTemplateMetricsProviderJenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderJenkins {
	JenkinsInterval: *string,
	PipelineName: *string,
	Timeout: *string,
	JenkinsParameters: github.com/cdktf/cdktf-provider-spotinst-go/spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters,
	TlsVerification: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsInterval">JenkinsInterval</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#jenkins_interval OceancdVerificationTemplate#jenkins_interval}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.pipelineName">PipelineName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#pipeline_name OceancdVerificationTemplate#pipeline_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.timeout">Timeout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#timeout OceancdVerificationTemplate#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsParameters">JenkinsParameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a></code> | jenkins_parameters block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.tlsVerification">TlsVerification</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#tls_verification OceancdVerificationTemplate#tls_verification}. |

---

##### `JenkinsInterval`<sup>Required</sup> <a name="JenkinsInterval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsInterval"></a>

```go
JenkinsInterval *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#jenkins_interval OceancdVerificationTemplate#jenkins_interval}.

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.pipelineName"></a>

```go
PipelineName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#pipeline_name OceancdVerificationTemplate#pipeline_name}.

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#timeout OceancdVerificationTemplate#timeout}.

---

##### `JenkinsParameters`<sup>Optional</sup> <a name="JenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsParameters"></a>

```go
JenkinsParameters OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

jenkins_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#jenkins_parameters OceancdVerificationTemplate#jenkins_parameters}

---

##### `TlsVerification`<sup>Optional</sup> <a name="TlsVerification" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.tlsVerification"></a>

```go
TlsVerification interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#tls_verification OceancdVerificationTemplate#tls_verification}.

---

### OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters <a name="OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters {
	ParameterKey: *string,
	ParameterValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterKey">ParameterKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#parameter_key OceancdVerificationTemplate#parameter_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#parameter_value OceancdVerificationTemplate#parameter_value}. |

---

##### `ParameterKey`<sup>Required</sup> <a name="ParameterKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterKey"></a>

```go
ParameterKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#parameter_key OceancdVerificationTemplate#parameter_key}.

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterValue"></a>

```go
ParameterValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#parameter_value OceancdVerificationTemplate#parameter_value}.

---

### OceancdVerificationTemplateMetricsProviderJob <a name="OceancdVerificationTemplateMetricsProviderJob" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderJob {
	Spec: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob.property.spec">Spec</a></code> | <code>interface{}</code> | spec block. |

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob.property.spec"></a>

```go
Spec interface{}
```

- *Type:* interface{}

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#spec OceancdVerificationTemplate#spec}

---

### OceancdVerificationTemplateMetricsProviderJobSpec <a name="OceancdVerificationTemplateMetricsProviderJobSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderJobSpec {
	JobTemplate: interface{},
	BackoffLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.jobTemplate">JobTemplate</a></code> | <code>interface{}</code> | job_template block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.backoffLimit">BackoffLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#backoff_limit OceancdVerificationTemplate#backoff_limit}. |

---

##### `JobTemplate`<sup>Required</sup> <a name="JobTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.jobTemplate"></a>

```go
JobTemplate interface{}
```

- *Type:* interface{}

job_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#job_template OceancdVerificationTemplate#job_template}

---

##### `BackoffLimit`<sup>Optional</sup> <a name="BackoffLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.backoffLimit"></a>

```go
BackoffLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#backoff_limit OceancdVerificationTemplate#backoff_limit}.

---

### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate {
	TemplateSpec: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate.property.templateSpec">TemplateSpec</a></code> | <code>interface{}</code> | template_spec block. |

---

##### `TemplateSpec`<sup>Required</sup> <a name="TemplateSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate.property.templateSpec"></a>

```go
TemplateSpec interface{}
```

- *Type:* interface{}

template_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#template_spec OceancdVerificationTemplate#template_spec}

---

### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec {
	Containers: interface{},
	RestartPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.containers">Containers</a></code> | <code>interface{}</code> | containers block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.restartPolicy">RestartPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#restart_policy OceancdVerificationTemplate#restart_policy}. |

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#containers OceancdVerificationTemplate#containers}

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.restartPolicy"></a>

```go
RestartPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#restart_policy OceancdVerificationTemplate#restart_policy}.

---

### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers {
	Command: *[]*string,
	ContainerName: *string,
	Image: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.command">Command</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#command OceancdVerificationTemplate#command}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#container_name OceancdVerificationTemplate#container_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#image OceancdVerificationTemplate#image}. |

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#command OceancdVerificationTemplate#command}.

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#container_name OceancdVerificationTemplate#container_name}.

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#image OceancdVerificationTemplate#image}.

---

### OceancdVerificationTemplateMetricsProviderNewRelic <a name="OceancdVerificationTemplateMetricsProviderNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderNewRelic {
	NewRelicQuery: *string,
	Profile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.newRelicQuery">NewRelicQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.profile">Profile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}. |

---

##### `NewRelicQuery`<sup>Required</sup> <a name="NewRelicQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.newRelicQuery"></a>

```go
NewRelicQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}.

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}.

---

### OceancdVerificationTemplateMetricsProviderPrometheus <a name="OceancdVerificationTemplateMetricsProviderPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderPrometheus {
	PrometheusQuery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus.property.prometheusQuery">PrometheusQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}. |

---

##### `PrometheusQuery`<sup>Required</sup> <a name="PrometheusQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus.property.prometheusQuery"></a>

```go
PrometheusQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}.

---

### OceancdVerificationTemplateMetricsProviderWeb <a name="OceancdVerificationTemplateMetricsProviderWeb" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderWeb {
	Url: *string,
	Body: *string,
	Insecure: interface{},
	JsonPath: *string,
	Method: *string,
	TimeoutSeconds: *f64,
	WebHeader: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#url OceancdVerificationTemplate#url}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.body">Body</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#body OceancdVerificationTemplate#body}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.insecure">Insecure</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#insecure OceancdVerificationTemplate#insecure}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.jsonPath">JsonPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#json_path OceancdVerificationTemplate#json_path}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.method">Method</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#method OceancdVerificationTemplate#method}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#timeout_seconds OceancdVerificationTemplate#timeout_seconds}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.webHeader">WebHeader</a></code> | <code>interface{}</code> | web_header block. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#url OceancdVerificationTemplate#url}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.body"></a>

```go
Body *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#body OceancdVerificationTemplate#body}.

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#insecure OceancdVerificationTemplate#insecure}.

---

##### `JsonPath`<sup>Optional</sup> <a name="JsonPath" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.jsonPath"></a>

```go
JsonPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#json_path OceancdVerificationTemplate#json_path}.

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.method"></a>

```go
Method *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#method OceancdVerificationTemplate#method}.

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#timeout_seconds OceancdVerificationTemplate#timeout_seconds}.

---

##### `WebHeader`<sup>Optional</sup> <a name="WebHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.webHeader"></a>

```go
WebHeader interface{}
```

- *Type:* interface{}

web_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#web_header OceancdVerificationTemplate#web_header}

---

### OceancdVerificationTemplateMetricsProviderWebWebHeader <a name="OceancdVerificationTemplateMetricsProviderWebWebHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

&oceancdverificationtemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader {
	WebHeaderKey: *string,
	WebHeaderValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderKey">WebHeaderKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#web_header_key OceancdVerificationTemplate#web_header_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderValue">WebHeaderValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#web_header_value OceancdVerificationTemplate#web_header_value}. |

---

##### `WebHeaderKey`<sup>Required</sup> <a name="WebHeaderKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderKey"></a>

```go
WebHeaderKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#web_header_key OceancdVerificationTemplate#web_header_key}.

---

##### `WebHeaderValue`<sup>Required</sup> <a name="WebHeaderValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderValue"></a>

```go
WebHeaderValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.2/docs/resources/oceancd_verification_template#web_header_value OceancdVerificationTemplate#web_header_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdVerificationTemplateArgsList <a name="OceancdVerificationTemplateArgsList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateArgsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateArgsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateArgsOutputReference <a name="OceancdVerificationTemplateArgsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateArgsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateArgsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.putValueFrom">PutValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValueFrom">ResetValueFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueFrom` <a name="PutValueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.putValueFrom"></a>

```go
func PutValueFrom(value OceancdVerificationTemplateArgsValueFrom)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.putValueFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueFrom` <a name="ResetValueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValueFrom"></a>

```go
func ResetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFrom">ValueFrom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference">OceancdVerificationTemplateArgsValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argNameInput">ArgNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argName">ArgName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFrom"></a>

```go
func ValueFrom() OceancdVerificationTemplateArgsValueFromOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference">OceancdVerificationTemplateArgsValueFromOutputReference</a>

---

##### `ArgNameInput`<sup>Optional</sup> <a name="ArgNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argNameInput"></a>

```go
func ArgNameInput() *string
```

- *Type:* *string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFromInput"></a>

```go
func ValueFromInput() OceancdVerificationTemplateArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ArgName`<sup>Required</sup> <a name="ArgName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argName"></a>

```go
func ArgName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateArgsValueFromOutputReference <a name="OceancdVerificationTemplateArgsValueFromOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateArgsValueFromOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateArgsValueFromOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.putSecretKeyRef">PutSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resetSecretKeyRef">ResetSecretKeyRef</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretKeyRef` <a name="PutSecretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.putSecretKeyRef"></a>

```go
func PutSecretKeyRef(value OceancdVerificationTemplateArgsValueFromSecretKeyRef)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

---

##### `ResetSecretKeyRef` <a name="ResetSecretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resetSecretKeyRef"></a>

```go
func ResetSecretKeyRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRef">SecretKeyRef</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference">OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRefInput">SecretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretKeyRef`<sup>Required</sup> <a name="SecretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRef"></a>

```go
func SecretKeyRef() OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference">OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference</a>

---

##### `SecretKeyRefInput`<sup>Optional</sup> <a name="SecretKeyRefInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRefInput"></a>

```go
func SecretKeyRefInput() OceancdVerificationTemplateArgsValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateArgsValueFrom
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

---


### OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference <a name="OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateArgsValueFromSecretKeyRef
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resetDuration"></a>

```go
func ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQueryInput">DatadogQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQuery">DatadogQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatadogQueryInput`<sup>Optional</sup> <a name="DatadogQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQueryInput"></a>

```go
func DatadogQueryInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `DatadogQuery`<sup>Required</sup> <a name="DatadogQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQuery"></a>

```go
func DatadogQuery() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderList <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsBaselineBaselineProviderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateMetricsBaselineBaselineProviderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resetProfile">ResetProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resetProfile"></a>

```go
func ResetProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQueryInput">NewRelicQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQuery">NewRelicQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewRelicQueryInput`<sup>Optional</sup> <a name="NewRelicQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQueryInput"></a>

```go
func NewRelicQueryInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `NewRelicQuery`<sup>Required</sup> <a name="NewRelicQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQuery"></a>

```go
func NewRelicQuery() *string
```

- *Type:* *string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putDatadog">PutDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putNewRelic">PutNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putPrometheus">PutPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetDatadog">ResetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetNewRelic">ResetNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetPrometheus">ResetPrometheus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatadog` <a name="PutDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putDatadog"></a>

```go
func PutDatadog(value OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

---

##### `PutNewRelic` <a name="PutNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putNewRelic"></a>

```go
func PutNewRelic(value OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

---

##### `PutPrometheus` <a name="PutPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putPrometheus"></a>

```go
func PutPrometheus(value OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

---

##### `ResetDatadog` <a name="ResetDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetDatadog"></a>

```go
func ResetDatadog()
```

##### `ResetNewRelic` <a name="ResetNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetNewRelic"></a>

```go
func ResetNewRelic()
```

##### `ResetPrometheus` <a name="ResetPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetPrometheus"></a>

```go
func ResetPrometheus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadog">Datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelic">NewRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadogInput">DatadogInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelicInput">NewRelicInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheusInput">PrometheusInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Datadog`<sup>Required</sup> <a name="Datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadog"></a>

```go
func Datadog() OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference</a>

---

##### `NewRelic`<sup>Required</sup> <a name="NewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelic"></a>

```go
func NewRelic() OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference</a>

---

##### `Prometheus`<sup>Required</sup> <a name="Prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheus"></a>

```go
func Prometheus() OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference</a>

---

##### `DatadogInput`<sup>Optional</sup> <a name="DatadogInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadogInput"></a>

```go
func DatadogInput() OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

---

##### `NewRelicInput`<sup>Optional</sup> <a name="NewRelicInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelicInput"></a>

```go
func NewRelicInput() OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

---

##### `PrometheusInput`<sup>Optional</sup> <a name="PrometheusInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheusInput"></a>

```go
func PrometheusInput() OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQueryInput">PrometheusQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQuery">PrometheusQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrometheusQueryInput`<sup>Optional</sup> <a name="PrometheusQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQueryInput"></a>

```go
func PrometheusQueryInput() *string
```

- *Type:* *string

---

##### `PrometheusQuery`<sup>Required</sup> <a name="PrometheusQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQuery"></a>

```go
func PrometheusQuery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

---


### OceancdVerificationTemplateMetricsBaselineOutputReference <a name="OceancdVerificationTemplateMetricsBaselineOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsBaselineOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsBaselineOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.putBaselineProvider">PutBaselineProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMaxRange">ResetMaxRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMinRange">ResetMinRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaselineProvider` <a name="PutBaselineProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.putBaselineProvider"></a>

```go
func PutBaselineProvider(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.putBaselineProvider.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMaxRange` <a name="ResetMaxRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMaxRange"></a>

```go
func ResetMaxRange()
```

##### `ResetMinRange` <a name="ResetMinRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMinRange"></a>

```go
func ResetMinRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProvider">BaselineProvider</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList">OceancdVerificationTemplateMetricsBaselineBaselineProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProviderInput">BaselineProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRangeInput">MaxRangeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRangeInput">MinRangeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRange">MaxRange</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRange">MinRange</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.threshold">Threshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaselineProvider`<sup>Required</sup> <a name="BaselineProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProvider"></a>

```go
func BaselineProvider() OceancdVerificationTemplateMetricsBaselineBaselineProviderList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList">OceancdVerificationTemplateMetricsBaselineBaselineProviderList</a>

---

##### `BaselineProviderInput`<sup>Optional</sup> <a name="BaselineProviderInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProviderInput"></a>

```go
func BaselineProviderInput() interface{}
```

- *Type:* interface{}

---

##### `MaxRangeInput`<sup>Optional</sup> <a name="MaxRangeInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRangeInput"></a>

```go
func MaxRangeInput() *f64
```

- *Type:* *f64

---

##### `MinRangeInput`<sup>Optional</sup> <a name="MinRangeInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRangeInput"></a>

```go
func MinRangeInput() *f64
```

- *Type:* *f64

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *string
```

- *Type:* *string

---

##### `MaxRange`<sup>Required</sup> <a name="MaxRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRange"></a>

```go
func MaxRange() *f64
```

- *Type:* *f64

---

##### `MinRange`<sup>Required</sup> <a name="MinRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRange"></a>

```go
func MinRange() *f64
```

- *Type:* *f64

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.threshold"></a>

```go
func Threshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsBaseline
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

---


### OceancdVerificationTemplateMetricsList <a name="OceancdVerificationTemplateMetricsList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsOutputReference <a name="OceancdVerificationTemplateMetricsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline">PutBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putProvider">PutProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetBaseline">ResetBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetConsecutiveErrorLimit">ResetConsecutiveErrorLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetDryRun">ResetDryRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureCondition">ResetFailureCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureLimit">ResetFailureLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInitialDelay">ResetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetSuccessCondition">ResetSuccessCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseline` <a name="PutBaseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline"></a>

```go
func PutBaseline(value OceancdVerificationTemplateMetricsBaseline)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

---

##### `PutProvider` <a name="PutProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putProvider"></a>

```go
func PutProvider(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putProvider.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBaseline` <a name="ResetBaseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetBaseline"></a>

```go
func ResetBaseline()
```

##### `ResetConsecutiveErrorLimit` <a name="ResetConsecutiveErrorLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetConsecutiveErrorLimit"></a>

```go
func ResetConsecutiveErrorLimit()
```

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetDryRun` <a name="ResetDryRun" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetDryRun"></a>

```go
func ResetDryRun()
```

##### `ResetFailureCondition` <a name="ResetFailureCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureCondition"></a>

```go
func ResetFailureCondition()
```

##### `ResetFailureLimit` <a name="ResetFailureLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureLimit"></a>

```go
func ResetFailureLimit()
```

##### `ResetInitialDelay` <a name="ResetInitialDelay" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInitialDelay"></a>

```go
func ResetInitialDelay()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetSuccessCondition` <a name="ResetSuccessCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetSuccessCondition"></a>

```go
func ResetSuccessCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baseline">Baseline</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference">OceancdVerificationTemplateMetricsBaselineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.provider">Provider</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList">OceancdVerificationTemplateMetricsProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baselineInput">BaselineInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimitInput">ConsecutiveErrorLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRunInput">DryRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureConditionInput">FailureConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimitInput">FailureLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelayInput">InitialDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsNameInput">MetricsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.providerInput">ProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successConditionInput">SuccessConditionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimit">ConsecutiveErrorLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRun">DryRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureCondition">FailureCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimit">FailureLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelay">InitialDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsName">MetricsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successCondition">SuccessCondition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Baseline`<sup>Required</sup> <a name="Baseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baseline"></a>

```go
func Baseline() OceancdVerificationTemplateMetricsBaselineOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference">OceancdVerificationTemplateMetricsBaselineOutputReference</a>

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.provider"></a>

```go
func Provider() OceancdVerificationTemplateMetricsProviderList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList">OceancdVerificationTemplateMetricsProviderList</a>

---

##### `BaselineInput`<sup>Optional</sup> <a name="BaselineInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baselineInput"></a>

```go
func BaselineInput() OceancdVerificationTemplateMetricsBaseline
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

---

##### `ConsecutiveErrorLimitInput`<sup>Optional</sup> <a name="ConsecutiveErrorLimitInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimitInput"></a>

```go
func ConsecutiveErrorLimitInput() *f64
```

- *Type:* *f64

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `DryRunInput`<sup>Optional</sup> <a name="DryRunInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRunInput"></a>

```go
func DryRunInput() interface{}
```

- *Type:* interface{}

---

##### `FailureConditionInput`<sup>Optional</sup> <a name="FailureConditionInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureConditionInput"></a>

```go
func FailureConditionInput() *string
```

- *Type:* *string

---

##### `FailureLimitInput`<sup>Optional</sup> <a name="FailureLimitInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimitInput"></a>

```go
func FailureLimitInput() *f64
```

- *Type:* *f64

---

##### `InitialDelayInput`<sup>Optional</sup> <a name="InitialDelayInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelayInput"></a>

```go
func InitialDelayInput() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *string
```

- *Type:* *string

---

##### `MetricsNameInput`<sup>Optional</sup> <a name="MetricsNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsNameInput"></a>

```go
func MetricsNameInput() *string
```

- *Type:* *string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.providerInput"></a>

```go
func ProviderInput() interface{}
```

- *Type:* interface{}

---

##### `SuccessConditionInput`<sup>Optional</sup> <a name="SuccessConditionInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successConditionInput"></a>

```go
func SuccessConditionInput() *string
```

- *Type:* *string

---

##### `ConsecutiveErrorLimit`<sup>Required</sup> <a name="ConsecutiveErrorLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimit"></a>

```go
func ConsecutiveErrorLimit() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DryRun`<sup>Required</sup> <a name="DryRun" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRun"></a>

```go
func DryRun() interface{}
```

- *Type:* interface{}

---

##### `FailureCondition`<sup>Required</sup> <a name="FailureCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureCondition"></a>

```go
func FailureCondition() *string
```

- *Type:* *string

---

##### `FailureLimit`<sup>Required</sup> <a name="FailureLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimit"></a>

```go
func FailureLimit() *f64
```

- *Type:* *f64

---

##### `InitialDelay`<sup>Required</sup> <a name="InitialDelay" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelay"></a>

```go
func InitialDelay() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `MetricsName`<sup>Required</sup> <a name="MetricsName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsName"></a>

```go
func MetricsName() *string
```

- *Type:* *string

---

##### `SuccessCondition`<sup>Required</sup> <a name="SuccessCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successCondition"></a>

```go
func SuccessCondition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionNameInput">DimensionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValueInput">DimensionValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionName">DimensionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValue">DimensionValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DimensionNameInput`<sup>Optional</sup> <a name="DimensionNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionNameInput"></a>

```go
func DimensionNameInput() *string
```

- *Type:* *string

---

##### `DimensionValueInput`<sup>Optional</sup> <a name="DimensionValueInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValueInput"></a>

```go
func DimensionValueInput() *string
```

- *Type:* *string

---

##### `DimensionName`<sup>Required</sup> <a name="DimensionName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionName"></a>

```go
func DimensionName() *string
```

- *Type:* *string

---

##### `DimensionValue`<sup>Required</sup> <a name="DimensionValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValue"></a>

```go
func DimensionValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricName">MetricName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```go
func Dimensions() OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput"></a>

```go
func MetricNameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```go
func MetricName() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetricPeriod">ResetMetricPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetStat">ResetStat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric"></a>

```go
func PutMetric(value OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

---

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetMetricPeriod` <a name="ResetMetricPeriod" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetricPeriod"></a>

```go
func ResetMetricPeriod()
```

##### `ResetStat` <a name="ResetStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetStat"></a>

```go
func ResetStat()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriodInput">MetricPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.statInput">StatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriod">MetricPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.stat">Stat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```go
func Metric() OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricInput"></a>

```go
func MetricInput() OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

---

##### `MetricPeriodInput`<sup>Optional</sup> <a name="MetricPeriodInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriodInput"></a>

```go
func MetricPeriodInput() *f64
```

- *Type:* *f64

---

##### `StatInput`<sup>Optional</sup> <a name="StatInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.statInput"></a>

```go
func StatInput() *string
```

- *Type:* *string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `MetricPeriod`<sup>Required</sup> <a name="MetricPeriod" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriod"></a>

```go
func MetricPeriod() *f64
```

- *Type:* *f64

---

##### `Stat`<sup>Required</sup> <a name="Stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```go
func Stat() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat">PutMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetMetricStat">ResetMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetReturnData">ResetReturnData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricStat` <a name="PutMetricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat"></a>

```go
func PutMetricStat(value OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

---

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetMetricStat` <a name="ResetMetricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetMetricStat"></a>

```go
func ResetMetricStat()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetPeriod"></a>

```go
func ResetPeriod()
```

##### `ResetReturnData` <a name="ResetReturnData" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetReturnData"></a>

```go
func ResetReturnData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStat">MetricStat</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStatInput">MetricStatInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.periodInput">PeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnDataInput">ReturnDataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.period">Period</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnData">ReturnData</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricStat`<sup>Required</sup> <a name="MetricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStat"></a>

```go
func MetricStat() OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference</a>

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `MetricStatInput`<sup>Optional</sup> <a name="MetricStatInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStatInput"></a>

```go
func MetricStatInput() OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.periodInput"></a>

```go
func PeriodInput() *f64
```

- *Type:* *f64

---

##### `ReturnDataInput`<sup>Optional</sup> <a name="ReturnDataInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnDataInput"></a>

```go
func ReturnDataInput() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.period"></a>

```go
func Period() *f64
```

- *Type:* *f64

---

##### `ReturnData`<sup>Required</sup> <a name="ReturnData" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnData"></a>

```go
func ReturnData() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderCloudWatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.putMetricDataQueries">PutMetricDataQueries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricDataQueries` <a name="PutMetricDataQueries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.putMetricDataQueries"></a>

```go
func PutMetricDataQueries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.putMetricDataQueries.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resetDuration"></a>

```go
func ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueries">MetricDataQueries</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueriesInput">MetricDataQueriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDataQueries`<sup>Required</sup> <a name="MetricDataQueries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueries"></a>

```go
func MetricDataQueries() OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList</a>

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `MetricDataQueriesInput`<sup>Optional</sup> <a name="MetricDataQueriesInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueriesInput"></a>

```go
func MetricDataQueriesInput() interface{}
```

- *Type:* interface{}

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsProviderCloudWatch
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

---


### OceancdVerificationTemplateMetricsProviderDatadogOutputReference <a name="OceancdVerificationTemplateMetricsProviderDatadogOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderDatadogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsProviderDatadogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDatadogQuery">ResetDatadogQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDuration">ResetDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatadogQuery` <a name="ResetDatadogQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDatadogQuery"></a>

```go
func ResetDatadogQuery()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDuration"></a>

```go
func ResetDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQueryInput">DatadogQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQuery">DatadogQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatadogQueryInput`<sup>Optional</sup> <a name="DatadogQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQueryInput"></a>

```go
func DatadogQueryInput() *string
```

- *Type:* *string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `DatadogQuery`<sup>Required</sup> <a name="DatadogQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQuery"></a>

```go
func DatadogQuery() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

---


### OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference <a name="OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKeyInput">ParameterKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKey">ParameterKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterKeyInput`<sup>Optional</sup> <a name="ParameterKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKeyInput"></a>

```go
func ParameterKeyInput() *string
```

- *Type:* *string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValueInput"></a>

```go
func ParameterValueInput() *string
```

- *Type:* *string

---

##### `ParameterKey`<sup>Required</sup> <a name="ParameterKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKey"></a>

```go
func ParameterKey() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

---


### OceancdVerificationTemplateMetricsProviderJenkinsOutputReference <a name="OceancdVerificationTemplateMetricsProviderJenkinsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJenkinsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsProviderJenkinsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.putJenkinsParameters">PutJenkinsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetJenkinsParameters">ResetJenkinsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetTlsVerification">ResetTlsVerification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJenkinsParameters` <a name="PutJenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.putJenkinsParameters"></a>

```go
func PutJenkinsParameters(value OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.putJenkinsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

---

##### `ResetJenkinsParameters` <a name="ResetJenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetJenkinsParameters"></a>

```go
func ResetJenkinsParameters()
```

##### `ResetTlsVerification` <a name="ResetTlsVerification" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetTlsVerification"></a>

```go
func ResetTlsVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParameters">JenkinsParameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsIntervalInput">JenkinsIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParametersInput">JenkinsParametersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineNameInput">PipelineNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerificationInput">TlsVerificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsInterval">JenkinsInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineName">PipelineName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerification">TlsVerification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JenkinsParameters`<sup>Required</sup> <a name="JenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParameters"></a>

```go
func JenkinsParameters() OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference</a>

---

##### `JenkinsIntervalInput`<sup>Optional</sup> <a name="JenkinsIntervalInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsIntervalInput"></a>

```go
func JenkinsIntervalInput() *string
```

- *Type:* *string

---

##### `JenkinsParametersInput`<sup>Optional</sup> <a name="JenkinsParametersInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParametersInput"></a>

```go
func JenkinsParametersInput() OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

---

##### `PipelineNameInput`<sup>Optional</sup> <a name="PipelineNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineNameInput"></a>

```go
func PipelineNameInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `TlsVerificationInput`<sup>Optional</sup> <a name="TlsVerificationInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerificationInput"></a>

```go
func TlsVerificationInput() interface{}
```

- *Type:* interface{}

---

##### `JenkinsInterval`<sup>Required</sup> <a name="JenkinsInterval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsInterval"></a>

```go
func JenkinsInterval() *string
```

- *Type:* *string

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineName"></a>

```go
func PipelineName() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `TlsVerification`<sup>Required</sup> <a name="TlsVerification" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerification"></a>

```go
func TlsVerification() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsProviderJenkins
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

---


### OceancdVerificationTemplateMetricsProviderJobOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsProviderJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.putSpec">PutSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.putSpec"></a>

```go
func PutSpec(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.putSpec.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList">OceancdVerificationTemplateMetricsProviderJobSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.specInput">SpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.spec"></a>

```go
func Spec() OceancdVerificationTemplateMetricsProviderJobSpecList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList">OceancdVerificationTemplateMetricsProviderJobSpecList</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.specInput"></a>

```go
func SpecInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsProviderJob
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.putTemplateSpec">PutTemplateSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTemplateSpec` <a name="PutTemplateSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.putTemplateSpec"></a>

```go
func PutTemplateSpec(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.putTemplateSpec.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpec">TemplateSpec</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpecInput">TemplateSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateSpec`<sup>Required</sup> <a name="TemplateSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpec"></a>

```go
func TemplateSpec() OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList</a>

---

##### `TemplateSpecInput`<sup>Optional</sup> <a name="TemplateSpecInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpecInput"></a>

```go
func TemplateSpecInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.putContainers">PutContainers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainers` <a name="PutContainers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.putContainers"></a>

```go
func PutContainers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.putContainers.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicyInput">RestartPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicy">RestartPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containers"></a>

```go
func Containers() OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList</a>

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `RestartPolicyInput`<sup>Optional</sup> <a name="RestartPolicyInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicyInput"></a>

```go
func RestartPolicyInput() *string
```

- *Type:* *string

---

##### `RestartPolicy`<sup>Required</sup> <a name="RestartPolicy" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicy"></a>

```go
func RestartPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderJobSpecList <a name="OceancdVerificationTemplateMetricsProviderJobSpecList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJobSpecList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateMetricsProviderJobSpecList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateMetricsProviderJobSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderJobSpecOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderJobSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateMetricsProviderJobSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.putJobTemplate">PutJobTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resetBackoffLimit">ResetBackoffLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobTemplate` <a name="PutJobTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.putJobTemplate"></a>

```go
func PutJobTemplate(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.putJobTemplate.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBackoffLimit` <a name="ResetBackoffLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resetBackoffLimit"></a>

```go
func ResetBackoffLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplate">JobTemplate</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimitInput">BackoffLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplateInput">JobTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimit">BackoffLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobTemplate`<sup>Required</sup> <a name="JobTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplate"></a>

```go
func JobTemplate() OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList</a>

---

##### `BackoffLimitInput`<sup>Optional</sup> <a name="BackoffLimitInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimitInput"></a>

```go
func BackoffLimitInput() *f64
```

- *Type:* *f64

---

##### `JobTemplateInput`<sup>Optional</sup> <a name="JobTemplateInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplateInput"></a>

```go
func JobTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `BackoffLimit`<sup>Required</sup> <a name="BackoffLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimit"></a>

```go
func BackoffLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderList <a name="OceancdVerificationTemplateMetricsProviderList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateMetricsProviderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateMetricsProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderNewRelicOutputReference <a name="OceancdVerificationTemplateMetricsProviderNewRelicOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderNewRelicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsProviderNewRelicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resetProfile">ResetProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resetProfile"></a>

```go
func ResetProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQueryInput">NewRelicQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQuery">NewRelicQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NewRelicQueryInput`<sup>Optional</sup> <a name="NewRelicQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQueryInput"></a>

```go
func NewRelicQueryInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `NewRelicQuery`<sup>Required</sup> <a name="NewRelicQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQuery"></a>

```go
func NewRelicQuery() *string
```

- *Type:* *string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

---


### OceancdVerificationTemplateMetricsProviderOutputReference <a name="OceancdVerificationTemplateMetricsProviderOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateMetricsProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putCloudWatch">PutCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putDatadog">PutDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins">PutJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJob">PutJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putNewRelic">PutNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putPrometheus">PutPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb">PutWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetCloudWatch">ResetCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetDatadog">ResetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJenkins">ResetJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJob">ResetJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetNewRelic">ResetNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetPrometheus">ResetPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetWeb">ResetWeb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudWatch` <a name="PutCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putCloudWatch"></a>

```go
func PutCloudWatch(value OceancdVerificationTemplateMetricsProviderCloudWatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putCloudWatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

---

##### `PutDatadog` <a name="PutDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putDatadog"></a>

```go
func PutDatadog(value OceancdVerificationTemplateMetricsProviderDatadog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

---

##### `PutJenkins` <a name="PutJenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins"></a>

```go
func PutJenkins(value OceancdVerificationTemplateMetricsProviderJenkins)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

---

##### `PutJob` <a name="PutJob" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJob"></a>

```go
func PutJob(value OceancdVerificationTemplateMetricsProviderJob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

---

##### `PutNewRelic` <a name="PutNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putNewRelic"></a>

```go
func PutNewRelic(value OceancdVerificationTemplateMetricsProviderNewRelic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

---

##### `PutPrometheus` <a name="PutPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putPrometheus"></a>

```go
func PutPrometheus(value OceancdVerificationTemplateMetricsProviderPrometheus)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

---

##### `PutWeb` <a name="PutWeb" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb"></a>

```go
func PutWeb(value OceancdVerificationTemplateMetricsProviderWeb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

---

##### `ResetCloudWatch` <a name="ResetCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetCloudWatch"></a>

```go
func ResetCloudWatch()
```

##### `ResetDatadog` <a name="ResetDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetDatadog"></a>

```go
func ResetDatadog()
```

##### `ResetJenkins` <a name="ResetJenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJenkins"></a>

```go
func ResetJenkins()
```

##### `ResetJob` <a name="ResetJob" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJob"></a>

```go
func ResetJob()
```

##### `ResetNewRelic` <a name="ResetNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetNewRelic"></a>

```go
func ResetNewRelic()
```

##### `ResetPrometheus` <a name="ResetPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetPrometheus"></a>

```go
func ResetPrometheus()
```

##### `ResetWeb` <a name="ResetWeb" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetWeb"></a>

```go
func ResetWeb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatch">CloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadog">Datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference">OceancdVerificationTemplateMetricsProviderDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkins">Jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.job">Job</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference">OceancdVerificationTemplateMetricsProviderJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelic">NewRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsProviderNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsProviderPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.web">Web</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference">OceancdVerificationTemplateMetricsProviderWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatchInput">CloudWatchInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadogInput">DatadogInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkinsInput">JenkinsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jobInput">JobInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelicInput">NewRelicInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheusInput">PrometheusInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.webInput">WebInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudWatch`<sup>Required</sup> <a name="CloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatch"></a>

```go
func CloudWatch() OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference</a>

---

##### `Datadog`<sup>Required</sup> <a name="Datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadog"></a>

```go
func Datadog() OceancdVerificationTemplateMetricsProviderDatadogOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference">OceancdVerificationTemplateMetricsProviderDatadogOutputReference</a>

---

##### `Jenkins`<sup>Required</sup> <a name="Jenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkins"></a>

```go
func Jenkins() OceancdVerificationTemplateMetricsProviderJenkinsOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsOutputReference</a>

---

##### `Job`<sup>Required</sup> <a name="Job" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.job"></a>

```go
func Job() OceancdVerificationTemplateMetricsProviderJobOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference">OceancdVerificationTemplateMetricsProviderJobOutputReference</a>

---

##### `NewRelic`<sup>Required</sup> <a name="NewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelic"></a>

```go
func NewRelic() OceancdVerificationTemplateMetricsProviderNewRelicOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsProviderNewRelicOutputReference</a>

---

##### `Prometheus`<sup>Required</sup> <a name="Prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheus"></a>

```go
func Prometheus() OceancdVerificationTemplateMetricsProviderPrometheusOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsProviderPrometheusOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.web"></a>

```go
func Web() OceancdVerificationTemplateMetricsProviderWebOutputReference
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference">OceancdVerificationTemplateMetricsProviderWebOutputReference</a>

---

##### `CloudWatchInput`<sup>Optional</sup> <a name="CloudWatchInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatchInput"></a>

```go
func CloudWatchInput() OceancdVerificationTemplateMetricsProviderCloudWatch
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

---

##### `DatadogInput`<sup>Optional</sup> <a name="DatadogInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadogInput"></a>

```go
func DatadogInput() OceancdVerificationTemplateMetricsProviderDatadog
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

---

##### `JenkinsInput`<sup>Optional</sup> <a name="JenkinsInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkinsInput"></a>

```go
func JenkinsInput() OceancdVerificationTemplateMetricsProviderJenkins
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

---

##### `JobInput`<sup>Optional</sup> <a name="JobInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jobInput"></a>

```go
func JobInput() OceancdVerificationTemplateMetricsProviderJob
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

---

##### `NewRelicInput`<sup>Optional</sup> <a name="NewRelicInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelicInput"></a>

```go
func NewRelicInput() OceancdVerificationTemplateMetricsProviderNewRelic
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

---

##### `PrometheusInput`<sup>Optional</sup> <a name="PrometheusInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheusInput"></a>

```go
func PrometheusInput() OceancdVerificationTemplateMetricsProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

---

##### `WebInput`<sup>Optional</sup> <a name="WebInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.webInput"></a>

```go
func WebInput() OceancdVerificationTemplateMetricsProviderWeb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderPrometheusOutputReference <a name="OceancdVerificationTemplateMetricsProviderPrometheusOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderPrometheusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsProviderPrometheusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQueryInput">PrometheusQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQuery">PrometheusQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrometheusQueryInput`<sup>Optional</sup> <a name="PrometheusQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQueryInput"></a>

```go
func PrometheusQueryInput() *string
```

- *Type:* *string

---

##### `PrometheusQuery`<sup>Required</sup> <a name="PrometheusQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQuery"></a>

```go
func PrometheusQuery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsProviderPrometheus
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

---


### OceancdVerificationTemplateMetricsProviderWebOutputReference <a name="OceancdVerificationTemplateMetricsProviderWebOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderWebOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceancdVerificationTemplateMetricsProviderWebOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.putWebHeader">PutWebHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetJsonPath">ResetJsonPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetWebHeader">ResetWebHeader</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWebHeader` <a name="PutWebHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.putWebHeader"></a>

```go
func PutWebHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.putWebHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetJsonPath` <a name="ResetJsonPath" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetJsonPath"></a>

```go
func ResetJsonPath()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```

##### `ResetWebHeader` <a name="ResetWebHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetWebHeader"></a>

```go
func ResetWebHeader()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeader">WebHeader</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList">OceancdVerificationTemplateMetricsProviderWebWebHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPathInput">JsonPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeaderInput">WebHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPath">JsonPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WebHeader`<sup>Required</sup> <a name="WebHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeader"></a>

```go
func WebHeader() OceancdVerificationTemplateMetricsProviderWebWebHeaderList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList">OceancdVerificationTemplateMetricsProviderWebWebHeaderList</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `JsonPathInput`<sup>Optional</sup> <a name="JsonPathInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPathInput"></a>

```go
func JsonPathInput() *string
```

- *Type:* *string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `WebHeaderInput`<sup>Optional</sup> <a name="WebHeaderInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeaderInput"></a>

```go
func WebHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Insecure`<sup>Required</sup> <a name="Insecure" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `JsonPath`<sup>Required</sup> <a name="JsonPath" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPath"></a>

```go
func JsonPath() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.internalValue"></a>

```go
func InternalValue() OceancdVerificationTemplateMetricsProviderWeb
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

---


### OceancdVerificationTemplateMetricsProviderWebWebHeaderList <a name="OceancdVerificationTemplateMetricsProviderWebWebHeaderList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderWebWebHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OceancdVerificationTemplateMetricsProviderWebWebHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.get"></a>

```go
func Get(index *f64) OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference <a name="OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-spotinst-go/spotinst/oceancdverificationtemplate"

oceancdverificationtemplate.NewOceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKeyInput">WebHeaderKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValueInput">WebHeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKey">WebHeaderKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValue">WebHeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WebHeaderKeyInput`<sup>Optional</sup> <a name="WebHeaderKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKeyInput"></a>

```go
func WebHeaderKeyInput() *string
```

- *Type:* *string

---

##### `WebHeaderValueInput`<sup>Optional</sup> <a name="WebHeaderValueInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValueInput"></a>

```go
func WebHeaderValueInput() *string
```

- *Type:* *string

---

##### `WebHeaderKey`<sup>Required</sup> <a name="WebHeaderKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKey"></a>

```go
func WebHeaderKey() *string
```

- *Type:* *string

---

##### `WebHeaderValue`<sup>Required</sup> <a name="WebHeaderValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValue"></a>

```go
func WebHeaderValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



