# `spotinst_ocean_aws_extended_resource_definition`

Refer to the Terraform Registory for docs: [`spotinst_ocean_aws_extended_resource_definition`](https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition).

# `oceanAwsExtendedResourceDefinition` Submodule <a name="`oceanAwsExtendedResourceDefinition` Submodule" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAwsExtendedResourceDefinition <a name="OceanAwsExtendedResourceDefinition" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition"></a>

Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition spotinst_ocean_aws_extended_resource_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer"></a>

```typescript
import { oceanAwsExtendedResourceDefinition } from '@cdktf/provider-spotinst'

new oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition(scope: Construct, id: string, config: OceanAwsExtendedResourceDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig">OceanAwsExtendedResourceDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig">OceanAwsExtendedResourceDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isConstruct"></a>

```typescript
import { oceanAwsExtendedResourceDefinition } from '@cdktf/provider-spotinst'

oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformElement"></a>

```typescript
import { oceanAwsExtendedResourceDefinition } from '@cdktf/provider-spotinst'

oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformResource"></a>

```typescript
import { oceanAwsExtendedResourceDefinition } from '@cdktf/provider-spotinst'

oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.resourceMappingInput">resourceMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.resourceMapping">resourceMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceMappingInput`<sup>Optional</sup> <a name="resourceMappingInput" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.resourceMappingInput"></a>

```typescript
public readonly resourceMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceMapping`<sup>Required</sup> <a name="resourceMapping" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.resourceMapping"></a>

```typescript
public readonly resourceMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAwsExtendedResourceDefinitionConfig <a name="OceanAwsExtendedResourceDefinitionConfig" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.Initializer"></a>

```typescript
import { oceanAwsExtendedResourceDefinition } from '@cdktf/provider-spotinst'

const oceanAwsExtendedResourceDefinitionConfig: oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition#name OceanAwsExtendedResourceDefinition#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.resourceMapping">resourceMapping</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition#resource_mapping OceanAwsExtendedResourceDefinition#resource_mapping}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition#id OceanAwsExtendedResourceDefinition#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition#name OceanAwsExtendedResourceDefinition#name}.

---

##### `resourceMapping`<sup>Required</sup> <a name="resourceMapping" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.resourceMapping"></a>

```typescript
public readonly resourceMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition#resource_mapping OceanAwsExtendedResourceDefinition#resource_mapping}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAwsExtendedResourceDefinition.OceanAwsExtendedResourceDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_aws_extended_resource_definition#id OceanAwsExtendedResourceDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



